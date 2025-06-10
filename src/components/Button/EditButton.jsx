/** @jsxImportSource @emotion/react */
import * as s from './style';

function EditButton({onClick}) {
    return (
        <button css={s.editBtn} onClick={onClick}>수정</button>
    );
}

export default EditButton;