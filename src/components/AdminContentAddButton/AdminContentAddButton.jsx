/** @jsxImportSource @emotion/react */
import * as s from './style';
import { Link } from 'react-router-dom';

function AdminContentAddButton({link}) {
    return (
        <Link to={link} css={s.button}>
            <button>게시글 등록</button>
        </Link>
    );
}

export default AdminContentAddButton;