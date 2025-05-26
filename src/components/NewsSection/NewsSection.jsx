/** @jsxImportSource @emotion/react */
import * as s from './style';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getNotices } from '@/firebase/noticeService';

const NewsSection = () => {
  const [notices, setNotices] = useState();
  useEffect(async () => {
    const data = await getNotices();
    setNotices(data);
    console.log(notices);
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

        <table css={s.NewsTable}>
          <thead>
            <tr>
              <th css={s.TableHeader}>제목</th>
              <th css={s.TableHeaderDate}>작성일</th>
            </tr>
          </thead>
          <tbody>
            {notices?.map((notice, index) => (
              <tr key={notice.id}>
                <td css={index === notices.length - 1 ? s.TableCellLast : s.TableCell}>
                  <Link href={`/notice/${notice.id}`}>
                    <span css={s.NewsLink}>{notice.title}</span>
                  </Link>
                </td>
                <td css={index === notices.length - 1 ? s.TableCellDateLast : s.TableCellDate}>
               
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default NewsSection;
