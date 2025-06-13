/** @jsxImportSource @emotion/react */
import * as s from './style';

function DeleteButton({onClick}) {
    return (
       <button type='button' css={s.deleteBtn} onClick={onClick}>삭제</button>
    );
}

export default DeleteButton;