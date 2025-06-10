
/** @jsxImportSource @emotion/react */
import * as s from './style';

import BackButton from '@/components/Button/BackButton';
import EditButton from '@/components/Button/EditButton';
import DeleteButton from '@/components/Button/DeleteButton';
import useAuthstate from '@/hooks/useAuthstate';
import { useNavigate } from 'react-router-dom';

function BoardComponent({ handleEdit, handleDelete,title, content, date, view}) {
    const {isLoggedIn} = useAuthstate();
    const navigate = useNavigate();
    return (
        <div css={s.postContainer}>
        {
          isLoggedIn &&
           <div css={s.adminButtons}>
            <EditButton onClick={handleEdit} />
            <DeleteButton onClick={handleDelete} />
           </div>
        }
        <div css={s.postHeader}>
          <h1 css={s.postTitle}>{title}</h1>
          <div css={s.postMeta}>
            <span>
              작성일: {date}
            </span>
            <span>
              조회수: {view}
            </span>
          </div>
        </div>
        <div
            css={s.postContent}
            dangerouslySetInnerHTML={{ __html: content || '' }}
        />
        <BackButton onClick={() => navigate(-1)} />
      </div>
    );
}

export default BoardComponent;