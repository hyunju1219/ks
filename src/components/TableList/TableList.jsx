/** @jsxImportSource @emotion/react */
import useAuthstate from '@/hooks/useAuthstate';
import * as s from './style';

/**
 * 재사용 가능한 테이블 리스트 컴포넌트
 * @param {Array<Object>} headers - 테이블 헤더 설정. 각 객체는 { key: string, label: string } 형태여야 합니다.
 * @param {Array<Object>} contents - 테이블에 표시될 데이터 객체의 배열. 각 객체는 고유한 'id'를 포함해야 합니다.
 * @param {Function} [renderActions] - (선택 사항) 각 행의 끝에 추가될 액션(버튼 등)을 렌더링하는 함수. content 객체를 인자로 받습니다.
 */
function TableList({ headers, contents, renderActions }) {
    const {isLoggedIn} = useAuthstate();
   
    // 데이터가 없거나 배열이 아닐 경우를 대비한 UI
    if (!contents || !Array.isArray(contents) || contents.length === 0) {
        return (
            <table css={s.tableLayout}>
                <thead css={s.tableHeader}>
                    <tr>
                        {headers.map(header => (
                            <th key={header.key}>{header.label}</th>
                        ))}
                        {renderActions && <th>관리</th>}
                    </tr>
                </thead>
                <tbody css={s.tableBody}>
                    <tr>
                        <td colSpan={headers.length + (renderActions ? 1 : 0)}>
                            데이터가 없습니다.
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
    
    return (
        <table css={s.tableLayout}>
            <thead css={s.tableHeader}>
                <tr>
                    {/* headers 배열을 순회하며 라벨을 렌더링 */}
                    {headers.map(header => (
                        <th key={header.key}>{header.label}</th>
                    ))}
                    {/* 액션 렌더링 함수가 있으면 '관리' 헤더 추가 */}
                    {isLoggedIn && <th>관리</th>}
                </tr>
            </thead>
            <tbody css={s.tableBody}>
                {contents.map((content, idx) => (
                    <tr key={content.id || `row-${idx}`}>
                        {/* headers 배열을 순회하며 key를 사용해 동적으로 데이터 렌더링 */}
                        {headers.map(header => (
                            <td key={`${content.id}-${header.key}`}>
                                {header.key === 'index' ? idx + 1 : content[header.key]}
                            </td>
                        ))}
                        {/* 액션 렌더링 함수가 있으면 해당 함수를 호출하여 버튼 렌더링 */}
                        {isLoggedIn && (
                            <td>
                                {renderActions(content)}
                            </td>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TableList;