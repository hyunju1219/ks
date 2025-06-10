import { collection, deleteDoc, doc, getDoc, getDocs, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "./config";

const EMP_POSTS_COLLECTION = 'empPosts';

export const saveEmpPost = async (data) => {
  const id = data.id || crypto.randomUUID(); // id가 없으면 새로 생성
  const docRef = doc(db, EMP_POSTS_COLLECTION, id);

  await setDoc(docRef, {
    ...data,
    id,
    createdAt: serverTimestamp(),
  });

  return id;
};

export const deleteEmpPost = async (id) => {
  const docRef = doc(db, EMP_POSTS_COLLECTION, id);
 
  try {
        await deleteDoc(docRef);
        alert('삭제 완료');

      } catch (err) {
        console.error('삭제 오류', err);
        alert('삭제 실패');
      }
};

//공지 전체 조회 - noticePage
export const getEmpPosts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, EMP_POSTS_COLLECTION));
    const fetchedEmpPosts = querySnapshot?.docs?.map(doc => doc.data());
    console.log(fetchedEmpPosts)
    return fetchedEmpPosts
  } catch (error) {
    console.error('getEmpPost 오류:', error);
    throw error;
  }
}

//공지 상세 조회 - noticeDetailPage
export const getEmpPostById = async (id) => {
  try {
    const docRef = doc(db, EMP_POSTS_COLLECTION, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  } catch (error) {
    console.error('getEmpPostById 오류:', error);
    throw error;
  }
};