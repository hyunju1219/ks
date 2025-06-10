/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate, useParams } from "react-router-dom";
import * as s from './style'; // style.js 파일에서 모든 스타일을 가져옵니다.
import SubpageHeader from '@/components/SubpageHeader/SubpageHeader';
import useAuthstate from '@/hooks/useAuthstate';
import { deleteCourse, getNoticeById } from '@/firebase/noticeService';
import BackButton from '@/components/Button/BackButton';
import EditButton from '@/components/Button/EditButton';
import DeleteButton from '@/components/Button/DeleteButton';
import BoardComponent from '@/components/BoardComponent/BoardComponent';

const NoticeDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
          navigate('/notice');
          return;
        }
        setNotice(data);
      } catch (error) {
        console.error('데이터 불러오기 실패:', error);
        alert('데이터를 불러오는데 실패했습니다.');
        navigate('/notice');
      } finally {
        setLoading(false);
      }
    };
    fetchNotice();
  }, [id, navigate]);

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
      navigate('/notice');
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
      <BoardComponent 
        handleEdit={() => navigate(`/admin/notice/${id}`)}
        handleDelete={handleDelete}
        title={notice.title}
        content={notice.content}
        date={notice.createdAt?.toDate().toLocaleDateString('ko-KR')}
        />
    </>
  );
};

export default NoticeDetailPage;