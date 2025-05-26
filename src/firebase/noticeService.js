import { collection, deleteDoc, doc, getDoc, getDocs, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "./config";

// 저장, 수정 - AdminNotice, AdminNoticeEdit
export const saveNotice = async (data) => {
  const id = data.id || crypto.randomUUID(); // id가 없으면 새로 생성
  const docRef = doc(db, 'notices', id);

  await setDoc(docRef, {
    ...data,
    id,
    createdAt: serverTimestamp(),
  });

  return id;
};

// 삭제 - NoticeDetailPage
export const deleteCourse = async (id) => {
  const docRef = doc(db, 'notices', id);
 
  try {
        await deleteDoc(docRef);
        alert('삭제 완료');

      } catch (err) {
        console.error('삭제 오류', err);
        alert('삭제 실패');
      }
};

//공지 전체 조회 - noticePage
export const getNotices = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'notices'));
    const fetchedNotices = querySnapshot?.docs?.map(doc => doc.data());
    console.log(fetchedNotices)
    return fetchedNotices
  } catch (error) {
    console.error('getNotice 오류:', error);
    throw error;
  }
}

//공지 상세 조회 - noticeDetailPage
export const getNoticeById = async (id) => {
  try {
    const docRef = doc(db, 'notices', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  } catch (error) {
    console.error('getNoticeById 오류:', error);
    throw error;
  }
};
