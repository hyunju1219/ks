import { collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import { db, storage } from "./config"; // storage도 여기서 import 할 수 있다면 좋습니다.
import { ref, deleteObject } from "firebase/storage"; // Storage 함수

// 교육 과정 저장 또는 수정
export const saveCourse = async (courseData) => {
  // courseData에 id가 있으면 해당 ID를 사용 (수정), 없으면 새로 생성 (추가)
  const courseId = courseData.id || crypto.randomUUID();
  const courseRef = doc(db, 'courses', courseId);

  try {
    // courseData에 id 필드가 없다면 명시적으로 추가
    const dataToSave = {
      ...courseData,
      id: courseId, // 문서 내에도 ID를 저장
      // createdAt, updatedAt 같은 타임스탬프 필드도 여기서 관리할 수 있습니다.
      // 예: updatedAt: serverTimestamp() (firebase/firestore에서 serverTimestamp import 필요)
    };

    // setDoc은 문서 전체를 덮어쓰거나 새로 생성합니다.
    // 만약 특정 필드만 업데이트하고 싶다면 updateDoc을 사용하고,
    // 문서가 없을 때 새로 생성하려면 { merge: true } 옵션을 setDoc과 함께 사용할 수 있습니다.
    // 여기서는 전체 데이터를 저장하는 것이므로 setDoc이 적절합니다.
    await setDoc(courseRef, dataToSave);
    console.log("과정 저장/수정 성공 ID:", courseId);
    return courseId; // 저장/수정된 문서의 ID 반환
  } catch (error) {
    console.error("과정 저장/수정 오류:", error);
    throw error; // 에러를 다시 던져서 호출한 쪽에서 처리할 수 있도록 함
  }
};

// 교육 과정 삭제 (Firestore 문서만 삭제)
// Storage 이미지 삭제는 호출하는 컴포넌트(AdminCourseEdit)에서 처리합니다.
// 만약 여기서 Storage 이미지도 삭제하려면 imageUrl 인자가 필요합니다.
export const deleteCourse = async (courseId) => {
  if (!courseId) {
    console.error("삭제할 과정 ID가 없습니다.");
    throw new Error("삭제할 과정 ID가 필요합니다.");
  }
  const courseRef = doc(db, 'courses', courseId);
  try {
    await deleteDoc(courseRef);
    console.log("과정 삭제 성공 ID:", courseId);
  } catch (error) {
    console.error("과정 삭제 오류:", error);
    throw error;
  }
};

// (선택 사항) Firestore 문서와 Storage 이미지를 함께 삭제하는 서비스 함수 예시
export const deleteCourseWithImage = async (courseId, imageUrl) => {
  if (!courseId) {
    console.error("삭제할 과정 ID가 없습니다.");
    throw new Error("삭제할 과정 ID가 필요합니다.");
  }

  // 1. Firebase Storage에서 이미지 삭제
  if (imageUrl) {
    const getStoragePathFromUrl = (url) => { // AdminCourseEdit의 헬퍼 함수와 동일
      try {
        if (!url || !url.startsWith("https://firebasestorage.googleapis.com/")) return null;
        const decodedUrl = decodeURIComponent(url);
        const pathStartIndex = decodedUrl.indexOf('/o/') + 3;
        const pathEndIndex = decodedUrl.indexOf('?');
        if (pathStartIndex === 2 || pathEndIndex === -1) return null;
        return decodedUrl.substring(pathStartIndex, pathEndIndex);
      } catch (e) { return null; }
    };

    const storagePath = getStoragePathFromUrl(imageUrl);
    if (storagePath) {
      try {
        const imageRef = ref(storage, storagePath); // `storage` 인스턴스 필요
        await deleteObject(imageRef);
        console.log("Storage 이미지 삭제 성공:", storagePath);
      } catch (imageDeleteError) {
        console.warn("Storage 이미지 삭제 실패 (문서 삭제는 계속 진행):", imageDeleteError);
        // 여기서 특정 에러 처리를 하거나, 에러를 무시하고 진행할 수 있습니다.
        // throw imageDeleteError; // 이미지 삭제 실패 시 전체 작업 중단 원하면 에러 throw
      }
    }
  }

  // 2. Firestore에서 과정 문서 삭제
  const courseRef = doc(db, 'courses', courseId);
  try {
    await deleteDoc(courseRef);
    console.log("과정 문서 삭제 성공 ID:", courseId);
  } catch (error) {
    console.error("과정 문서 삭제 오류:", error);
    throw error;
  }
};


// 교육과정 전체 조회 - coursePage
export const getCourse = async () => {
   try {
      const querySnapshot = await getDocs(collection(db, 'courses'));
      // id를 포함하여 데이터를 매핑하는 것이 좋습니다.
      const fetchedCourses = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      console.log(fetchedCourses);
      return fetchedCourses;
    } catch (error) {
      console.error('getCourse 오류:', error);
      throw error;
    }
};


// 교육과정 상세 조회
export const getCourseById = async (id) => {
  if (!id) {
    console.error("조회할 과정 ID가 없습니다.");
    return null; // 또는 에러 throw
  }
  try {
    const docRef = doc(db, 'courses', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // id를 포함하여 데이터를 반환
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log("해당 ID의 문서를 찾을 수 없습니다:", id);
      return null;
    }
  } catch (error) {
    console.error('getCourseById 오류:', error);
    throw error;
  }
};

export const getRecruitingCourses = async () => {
  try {
    const coursesRef = collection(db, 'courses');
    // recruitmentStatus 필드가 "모집중"인 문서만 가져오는 쿼리
    const q = query(coursesRef, where("recruitmentStatus", "==", "모집중"));
    const querySnapshot = await getDocs(q);

    const fetchedCourses = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return fetchedCourses;
  } catch (error) {
    console.error('모집중인 과정 불러오기 오류:', error);
    throw error; // 에러를 다시 던져서 호출한 쪽에서 처리
  }
};
