/** @jsxImportSource @emotion/react */
import * as s from './style';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getNotices } from '@/firebase/noticeService'; // 경로 확인

// 날짜 포맷팅 헬퍼 함수
const formatDate = (timestamp) => {
  if (!timestamp) return ''; // 타임스탬프가 없으면 빈 문자열 반환

  // Firebase Timestamp 객체인 경우 toDate() 메소드로 Date 객체 변환
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);

  if (isNaN(date.getTime())) { // 유효하지 않은 날짜인 경우
    return '날짜 정보 없음';
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1, 두 자리로 만듦
  const day = String(date.getDate()).padStart(2, '0'); // 날짜를 두 자리로 만듦

  return `${year}-${month}-${day}`;
};

const NewsSection = () => {
  const [notices, setNotices] = useState([]); // 초기값을 빈 배열로 설정하여 map 오류 방지
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // 로딩 시작
      try {
        const data = await getNotices();
        // 데이터를 최신순으로 정렬 (예: createdAt 필드 기준 내림차순)
        // 실제 필드명은 Firestore에 저장된 필드명으로 변경해야 합니다.
        const sortedData = data.sort((a, b) => {
          const dateA = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(0);
          const dateB = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(0);
          return dateB - dateA; // 내림차순 정렬
        });
        setNotices(sortedData);
      } catch (error) {
        console.error("공지사항 데이터를 불러오는데 실패했습니다:", error);
        setNotices([]); // 오류 발생 시 빈 배열로 설정
      } finally {
        setIsLoading(false); // 로딩 종료
      }
    };
    fetchData();
  }, []);

  return (
    <section css={s.SectionContainer}>
      <div css={s.SectionInner}>
        <div css={s.SectionHeader}>
          <h2 css={s.SectionTitle}>공지사항</h2>
          <Link href="/notice">
            <span css={s.ViewAllLink}>
              전체보기 <ArrowRight size={16} />
            </span>
          </Link>
        </div>

        {isLoading ? (
          <div css={s.LoadingIndicator}> {/* 로딩 인디케이터 스타일 필요 */}
            <p>공지사항을 불러오는 중...</p>
          </div>
        ) : notices.length === 0 ? (
          <div css={s.EmptyMessage}> {/* 내용 없음 메시지 스타일 필요 */}
            <p>등록된 공지사항이 없습니다.</p>
          </div>
        ) : (
          <table css={s.NewsTable}>
            <tbody>
              {/* notices가 배열인지 확실히 하고 map을 사용 */}
              {Array.isArray(notices) && notices.map((notice) => (
                <tr key={notice.id}>
                  <td css={[s.TableCell, s.TitleCell]}> {/* 제목 셀 스타일 */}
                    <Link href={`/notice/${notice.id}`} css={s.NewsLinkWrapper}> {/* 링크에 스타일 적용 */}
                      <span css={s.NewsTitleText}>{notice.title}</span> {/* 제목 텍스트 스타일 */}
                    </Link>
                  </td>
                  {/* 날짜 필드명이 createdAt이라고 가정. 실제 필드명으로 변경 필요 */}
                  <td css={[s.TableCell, s.DateCell]}> {/* 날짜 셀 스타일 */}
                    {formatDate(notice.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default NewsSection;