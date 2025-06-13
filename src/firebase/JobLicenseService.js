import { collection, deleteDoc, doc, getDoc, getDocs, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "./config";

const LICENSE_POSTS_COLLECTION = 'licensePosts';

export const saveLicensePost = async (data) => {
  const id = data.id || crypto.randomUUID(); // id가 없으면 새로 생성
  const docRef = doc(db, LICENSE_POSTS_COLLECTION, id);

  await setDoc(docRef, {
    ...data,
    id,
    createdAt: serverTimestamp(),
  });

  return id;
};

export const deleteLicensePost = async (id) => {
  const docRef = doc(db, LICENSE_POSTS_COLLECTION, id);
 
  try {
        await deleteDoc(docRef);
        alert('삭제 완료');

      } catch (err) {
        console.error('삭제 오류', err);
        alert('삭제 실패');
      }
};

//공지 전체 조회 - noticePage
export const getLicensePosts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, LICENSE_POSTS_COLLECTION));
    const fetchedLicensePosts = querySnapshot?.docs?.map(doc => doc.data());
    console.log(fetchedLicensePosts)
    return fetchedLicensePosts
  } catch (error) {
    console.error('getLicensePost 오류:', error);
    throw error;
  }
}

//공지 상세 조회 - noticeDetailPage
export const getLicensePostById = async (id) => {
  try {
    const docRef = doc(db, LICENSE_POSTS_COLLECTION, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  } catch (error) {
    console.error('getLicensePostById 오류:', error);
    throw error;
  }
};