/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams, useLocation } from 'wouter';
import * as s from './style'; // style.js 파일에서 모든 스타일을 가져옵니다.
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
    if (window.confirm('정말로 이 공지사항을 삭제하시겠습니까?')) {
      await deleteCourse(id);
      alert('공지사항이 삭제되었습니다.');
      setLocation('/notice');
    }
  };

  return (
    <>
      <Helmet>
        <title>{notice.title} - 금성기술직업전문학교 공지사항</title>
        <meta name="description" content={`금성기술직업전문학교 공지사항: ${notice.title}`} />
      </Helmet>

      <SubpageHeader
        title="공지사항"
        subtitle="금성기술직업전문학교의 새로운 소식과 중요 안내사항을 확인하세요"
        breadcrumbs={breadcrumbs}
      />
      <div css={s.pageContainer}>
        <div css={s.detailBox}>
          <div css={s.header}>
            <h1 css={s.title}>{notice.title}</h1>
            <div css={s.meta}>
              <span css={s.categoryTag}>{notice.category}</span>
              <span css={s.dateText}>{notice.createdAt?.toDate().toLocaleDateString('ko-KR')}</span>
            </div>
          </div>

          <div css={s.content} dangerouslySetInnerHTML={{ __html: notice.content }} />

          {isLoggedIn && (
            <div css={s.adminButtons}>
              <Link href={`/admin/notice/${id}`}>
                <button css={s.editBtn}>수정</button>
              </Link>
              <button css={s.deleteBtn} onClick={handleDelete}>삭제</button>
            </div>
          )}
          <Link href="/notice">
            <button css={s.listBtn}>목록으로</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NoticeDetailPage;