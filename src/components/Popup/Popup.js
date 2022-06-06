/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PopupCard from "./components/PopupCard";
import usePopup from "./hooks/usePopup";

function Popup({ title, buttonName, children, isClosePopup }) {
  const { isOpen, isRender, onClose, onOpen } = usePopup(isClosePopup);

  return (
    <div>
      <button
        onClick={onOpen}
        css={css`
          background: #9976dd;
          margin: 50px 0 20px 50px;
          color: #fff;
          text-transform: uppercase;
          border: none;
          border-radius: 5px;
          padding: 10px 15px;
          cursor: pointer;
        `}
      >
        {buttonName}
      </button>
      {isRender && (
        <div
          css={css`
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: #b37ccf1f;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 1s;
            opacity: ${isOpen ? "1" : "0"};
          `}
        >
          <PopupCard isOpen={isOpen}>
          
            <span
              onClick={onClose}
              css={css`
                width: 15px;
                height: 15px;
                position: absolute;
                right: -50px;
                top: 70px;
                cursor: pointer;
              `}
            >
              X
            </span>
            {children}
          </PopupCard>
        </div>
        
      )}
    </div>
  );
}
export default Popup;
