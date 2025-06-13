// src/pages/JobInfoDetailPage/JobInfoDetailPage.jsx

/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as s from './style'; // 이 페이지를 위한 스타일 파일
import SubpageHeader from '@/components/SubpageHeader/SubpageHeader';
import { deleteJobPost, getJobPostById } from '@/firebase/jobInfoService';
import useAuthstate from '@/hooks/useAuthstate';

// [수정] 공통 버튼 컴포넌트는 그대로 사용합니다.
import BackButton from '@/components/Button/BackButton';
import EditButton from '@/components/Button/EditButton';
import DeleteButton from '@/components/Button/DeleteButton';
// [수정] BoardComponent import는 제거합니다.

function JobInfoDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthstate();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const breadcrumbs = [
    { name: '취업센터', link: '/job-center' },
    { name: '구인게시판', link: '/job-center/info' },
    { name: post ? post.companyName : '상세보기', link: null }
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
        const data = await getJobPostById(id);
        if (data) {
          setPost(data);
        } else {
          alert("존재하지 않는 게시글입니다.");
          navigate('/job-center/info');
        }
      } catch (err) {
        console.error("게시글 상세 정보 불러오기 오류:", err);
        setError("게시글을 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };
    fetchPostData();
  }, [id, navigate]);

  const handleDelete = async () => {
    if (!id) return;
    if (window.confirm('정말로 이 게시글을 삭제하시겠습니까?')) {
      try {
        await deleteJobPost(id);
        alert('게시글이 삭제되었습니다.');
        navigate('/job-center/info');
      } catch (err) {
        alert('삭제에 실패했습니다.');
        console.error(err);
      }
    }
  };

  const handleEdit = () => {
    if (id) {
      navigate(`/admin/job/${id}/edit`);
    }
  };

  if (loading) {
    return (
      <div css={s.layout}>
        <SubpageHeader title="구인게시판" subtitle="채용 정보를 확인하세요" breadcrumbs={breadcrumbs} />
        <div css={s.container}>
          <div css={s.loadingContainer}>게시글을 불러오는 중...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div css={s.layout}>
        <SubpageHeader title="오류" subtitle="페이지를 표시할 수 없습니다" breadcrumbs={breadcrumbs} />
        <div css={s.container}>
          <div css={s.errorContainer}>{error}</div>
        </div>
      </div>
    );
  }

  // 데이터가 성공적으로 로드된 경우
  return (
    <div css={s.layout}>
      <Helmet>
        <title>{`${post?.companyName || '구인게시판'} - ${post?.jobType || ''}`}</title>
        <meta name="description" content={`${post?.companyName}에서 ${post?.jobType} 직무를 채용합니다.`} />
      </Helmet>

      <SubpageHeader
        title="구인게시판"
        subtitle="금성기술직업전문학교와 협약을 맺은 기업의 채용 정보를 확인하세요"
        breadcrumbs={breadcrumbs}
      />
      
      {/* [수정] BoardComponent 대신 상세 정보 UI를 직접 렌더링합니다. */}
      {post && (
        <div css={s.postContainer}>
          {isLoggedIn && (
            <div css={s.adminButtons}>
              <EditButton onClick={handleEdit} />
              <DeleteButton onClick={handleDelete} />
            </div>
          )}

          {/* 메인 헤더: 회사명과 직무 */}
          <header css={s.mainHeader}>
            <h1 css={s.companyName}>{post.companyName}</h1>
            <h2 css={s.jobTitle}>{post.jobType}</h2>
          </header>

          {/* 모집 요강 섹션 */}
          <section css={s.detailSection}>
            <h3 css={s.detailSectionTitle}>모집 요강</h3>
            <div css={s.detailGrid}>
              <div css={s.detailItem}><span css={s.itemLabel}>직무 내용</span><span>{post.jobDescription}</span></div>
              <div css={s.detailItem}><span css={s.itemLabel}>모집 인원</span><span>{post.numRecruits}명</span></div>
              <div css={s.detailItem}><span css={s.itemLabel}>근무 예정지</span><span>{post.expectedWorkLocation}</span></div>
              <div css={s.detailItem}><span css={s.itemLabel}>접수 마감일</span><span>{post.applicationDeadline}</span></div>
              <div css={s.detailItem}><span css={s.itemLabel}>자격 사항</span><span>{post.qualifications}</span></div>
              <div css={s.detailItem}><span css={s.itemLabel}>사용 장비</span><span>{post.equipmentUsed}</span></div>
              <div css={s.detailItem}><span css={s.itemLabel}>학력</span><span>{post.educationLevel}</span></div>
              <div css={s.detailItem}><span css={s.itemLabel}>연령 제한</span><span>{post.ageLimit}</span></div>
            </div>
          </section>

          {/* 근무 조건 섹션 */}
          <section css={s.detailSection}>
            <h3 css={s.detailSectionTitle}>근무 조건</h3>
            <div css={s.detailGrid}>
              <div css={s.detailItem}><span css={s.itemLabel}>고용 형태</span><span>{post.employmentType}</span></div>
              <div css={s.detailItem}><span css={s.itemLabel}>급여 조건</span><span>{post.salaryConditionType === '면접후결정' ? '면접 후 결정' : `${post.salaryConditionType} ${Number(post.salaryAmount).toLocaleString()}원`}</span></div>
              <div css={s.detailItem}><span css={s.itemLabel}>수습 기간</span><span>{post.probationPeriod}</span></div>
              <div css={s.detailItem}><span css={s.itemLabel}>상여금</span><span>{post.bonus}</span></div>
              <div css={s.detailItem}><span css={s.itemLabel}>근무 시간</span><span>{post.workingHours}</span></div>
              <div css={s.detailItem}><span css={s.itemLabel}>잔업</span><span>{post.overtime}</span></div>
            </div>
          </section>

          {/* 복리후생 섹션 */}
          <section css={s.detailSection}>
            <h3 css={s.detailSectionTitle}>복리후생</h3>
            <div css={s.benefitsGrid}>
              {post.benefits.dormitory && <div css={s.benefitItem}>✓ 기숙사</div>}
              {post.benefits.commuterBus && <div css={s.benefitItem}>✓ 통근버스</div>}
              {post.benefits.mealProvision && <div css={s.benefitItem}>✓ 중식제공</div>}
              {post.benefits.severancePay && <div css={s.benefitItem}>✓ 퇴직금</div>}
              {post.benefits.scholarship && <div css={s.benefitItem}>✓ 학자금</div>}
              {post.benefits.congratulatoryCondolence && <div css={s.benefitItem}>✓ 경조사</div>}
            </div>
          </section>
          
          {/* 접수 및 문의 섹션 */}
          <section css={s.detailSection}>
            <h3 css={s.detailSectionTitle}>접수 및 문의</h3>
            <div css={s.detailGrid}>
              <div css={s.detailItem}><span css={s.itemLabel}>담당자</span><span>{post.contactPerson}</span></div>
              <div css={s.detailItem}><span css={s.itemLabel}>연락처</span><span>{post.contactNumber}</span></div>
              <div css={s.detailItem}><span css={s.itemLabel}>이메일</span><span><a href={`mailto:${post.email}`}>{post.email}</a></span></div>
              <div css={s.detailItemFull}><span css={s.itemLabel}>접수 이메일</span><span><a href={`mailto:${post.applicationEmail}`}>{post.applicationEmail}</a> (사업자등록증 사본과 함께 제출)</span></div>
            </div>
          </section>

          <BackButton onClick={() => navigate(-1)} />
        </div>
      )}
    </div>
  );
}

export default JobInfoDetailPage;