/** @jsxImportSource @emotion/react */
import * as s from './style';

function BackButton({ onClick }) {
    return (
        <div css={s.buttonContainer}>
            <button css={s.listButton} onClick={onClick}>
                목록으로
            </button>
        </div>
    );
}

export default BackButton;