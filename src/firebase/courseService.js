import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "./config";

// 저장 또는 수정
export const saveCourse = async (data) => {
  const id = data.id || crypto.randomUUID(); // id가 없으면 새로 생성
  const docRef = doc(db, 'courses', id);

  await setDoc(docRef, {
    ...data,
    id, // 문서 안에도 id 저장
  });

  return id;
};

// 삭제 - CourseDetailPage
export const deleteCourse = async (id) => {
  const docRef = doc(db, 'courses', id);
  await deleteDoc(docRef);
};


//교육과정 전체 조회 - coursePage
export const getCourse = async () => {
   try {
      const querySnapshot = await getDocs(collection(db, 'courses'));
      const fetchedCourses = querySnapshot.docs.map(doc => doc.data());
      return fetchedCourses
    } catch (error) {
      console.error('getCourse 오류:', error);
      throw error;
    }
}

//교육과정 상세 조회
export const getCourseById = async (id) => {
  try {
    const docRef = doc(db, 'courses', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  } catch (error) {
    console.error('getCourseById 오류:', error);
    throw error;
  }
};
