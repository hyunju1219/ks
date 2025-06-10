// src/pages/JobEmpDetailPage/JobEmpDetailPage.jsx

/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as s from './style';
import SubpageHeader from '@/components/SubpageHeader/SubpageHeader';
import BoardComponent from '@/components/BoardComponent/BoardComponent';
// [수정] 필요한 서비스 함수들을 import 합니다.
import { getEmpPostById, deleteEmpPost } from '@/firebase/jobEmpService';

function JobEmpDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const breadcrumbs = [
    { name: '취업센터', link: '/job-center' },
    { name: '취업현황', link: '/job-center/emp' },
    // 데이터 로딩 후 게시글 제목을 동적으로 표시
    { name: post ? post.title : '상세보기', link: null }, 
  ];

  useEffect(() => {
    if (!id) {
      setLoading(false);
      setError("잘못된 접근입니다. 게시글 ID가 없습니다.");
      return;
    }

    const fetchPostData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getEmpPostById(id);
        if (data) {
          setPost(data);
        } else {
          alert("존재하지 않는 게시글입니다.");
          navigate('/job-center/emp'); // 목록 페이지로 리디렉션
        }
      } catch (err) {
        console.error("취업 현황 상세 정보 불러오기 오류:", err);
        setError("게시글을 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchPostData();
  }, [id, navigate]);

  // 수정 버튼 클릭 시 실행될 핸들러
  const handleEdit = () => {
    if (id) {
      navigate(`/admin/job/emp/${id}/edit`);
    }
  };

  // 삭제 버튼 클릭 시 실행될 핸들러
  const handleDelete = async () => {
    if (!id) return;
    if (window.confirm('정말로 이 게시글을 삭제하시겠습니까?')) {
      try {
        await deleteEmpPost(id);
        alert('게시글이 삭제되었습니다.');
        navigate('/job-center/emp');
      } catch (err) {
        alert('삭제에 실패했습니다.');
        console.error(err);
      }
    }
  };


  if (loading) {
    return (
      <div css={s.layout}>
        <SubpageHeader
          title="취업현황"
          subtitle="금성기술직업전문학교 졸업생들의 성공적인 취업 사례를 소개합니다."
          breadcrumbs={breadcrumbs}
        />
        <div css={s.container}>
          <div css={s.loadingContainer}>게시글을 불러오는 중...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div css={s.layout}>
        <SubpageHeader
          title="오류"
          subtitle="페이지를 표시할 수 없습니다"
          breadcrumbs={breadcrumbs}
        />
        <div css={s.container}>
          <div css={s.errorContainer}>{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div css={s.layout}>
      <Helmet>
        <title>{`${post?.title || '취업현황'} - 금성기술직업전문학교`}</title>
        <meta
          name="description"
          content={post?.title || "금성기술직업전문학교 졸업생들의 성공적인 취업 사례를 소개합니다."}
        />
      </Helmet>

      <SubpageHeader
        title="취업현황"
        subtitle="금성기술직업전문학교 졸업생들의 성공적인 취업 사례를 소개합니다."
        breadcrumbs={breadcrumbs}
      />
      
      {/* BoardComponent에 필요한 모든 props를 전달합니다. */}
      {post && (
        <BoardComponent 
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          title={post.title}
          content={post.content}
          date={post.createdAt?.toDate().toLocaleDateString('ko-KR')}
          view={post.views}
        />
      )}
    </div>
  );
}

export default JobEmpDetailPage;