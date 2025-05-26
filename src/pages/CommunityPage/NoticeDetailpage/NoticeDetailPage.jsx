/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams, useLocation } from 'wouter';
import * as s from './style';
import SubpageHeader from '@/components/SubpageHeader/SubpageHeader';
import useAuthstate from '@/hooks/useAuthstate';
import { deleteCourse, getNoticeById } from '@/firebase/noticeService';

const NoticeDetailPage = () => {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  const [notice, setNotice] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isLoggedIn } = useAuthstate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchNotice = async () => {
      try {
        const data = await getNoticeById(id);
        if (!data) {
          alert('존재하지 않는 공지사항입니다.');
          setLocation('/notice');
          return;
        }
        setNotice(data);
      } catch (error) {
        console.error('데이터 불러오기 실패:', error);
        alert('데이터를 불러오는데 실패했습니다.');
        setLocation('/notice');
      } finally {
        setLoading(false);
      }
    };
    fetchNotice();
  }, [id, setLocation]);

  if (loading) {
    return <div css={s.loading}>로딩 중...</div>;
  }

  if (!notice) return null;

  const breadcrumbs = [
    { name: '커뮤니티', link: '/notice' },
    { name: '공지사항', link: '/notice' },
    { name: '상세보기', link: null }
  ];

    const handleDelete = async () => {
      if (!id) return alert('id 없음');
      await deleteCourse(id);
      setLocation('/notice');
    };

  return (
 <>
   
      <Helmet>
        <title>교육 과정 - 금성기술직업전문학교</title>
        <meta name="description" content="금성기술직업전문학교의 다양한 교육 과정을 소개합니다." />
      </Helmet>

      <SubpageHeader
        title="공지사항"
        subtitle="금성기술직업전문학교의 새로운 소식과 중요 안내사항을 확인하세요"
        breadcrumbs={breadcrumbs}
      />
 <div css={s.pageContainer}>
      <div css={s.detailBox}>
        <div css={s.titleLayout}>
          <h1 css={s.title}>{notice.title}</h1>
          {isLoggedIn && (
            <div css={s.adminButtons}>
              <Link href={`/admin/notice/${id}`}><button css={s.editBtn}>수정</button></Link>
              <button css={s.deleteBtn} onClick={handleDelete}>삭제</button>
            </div>
          )}
        </div>
           
        
        <div css={s.meta}>
          <span>{notice.category}</span>
          <span>{notice.createdAt?.toDate().toLocaleDateString('ko-KR')}</span>
        </div>

        <div css={s.content} dangerouslySetInnerHTML={{ __html: notice.content }} />

       
      </div>
    </div>
</>
  );
};

export default NoticeDetailPage;
