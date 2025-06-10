// src/firebase/jobService.js

import { collection, doc, setDoc, getDocs, getDoc, deleteDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "./config"; // config 파일에서 db 인스턴스를 가져옵니다.

const JOB_POSTS_COLLECTION = 'jobPosts'; // 컬렉션 이름을 상수로 관리하면 오타를 방지할 수 있습니다.

export const saveJobPost = async (data) => {
  const id = data.id || crypto.randomUUID(); // id가 없으면 새로 생성
  const docRef = doc(db, JOB_POSTS_COLLECTION, id);

  await setDoc(docRef, {
    ...data,
    id,
    createdAt: serverTimestamp(),
  });

  return id;
};

export const getJobPosts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, JOB_POSTS_COLLECTION));
    const fetchedNotices = querySnapshot?.docs?.map(doc => doc.data());
    console.log(fetchedNotices)
    return fetchedNotices
  } catch (error) {
    console.error('getJobPost 오류:', error);
    throw error;
  }
};

export const getJobPostById = async (id) => {
  if (!id) return null; // ID가 없는 경우 즉시 null 반환
  try {
    const docRef = doc(db, JOB_POSTS_COLLECTION, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // 조회수 증가 로직 (선택 사항)
      // 이 로직은 동시에 여러 사용자가 접근할 때 정확하지 않을 수 있으므로,
      // 더 정확한 구현이 필요하면 Firebase Functions (트랜잭션) 사용을 권장합니다.
      const currentViews = docSnap.data().views || 0;
      await updateDoc(docRef, {
        views: currentViews + 1
      });
      // 반환되는 데이터에는 즉시 반영된 조회수를 포함시킵니다.
      return { ...docSnap.data(), views: currentViews + 1 };
    } else {
      console.log("해당 ID의 문서가 없습니다.");
      return null;
    }
  } catch (error) {
    console.error("getJobPostById 오류:", error);
    throw error;
  }
};

export const deleteJobPost = async (id) => {
  const docRef = doc(db, JOB_POSTS_COLLECTION, id);
 
  try {
        await deleteDoc(docRef);
        alert('삭제 완료');

      } catch (err) {
        console.error('삭제 오류', err);
        alert('삭제 실패');
      }
};