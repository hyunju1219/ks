import { doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./config";

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