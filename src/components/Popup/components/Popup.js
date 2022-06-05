/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
import usePopup from "../hooks/usePopup";

function Popup(ContentComponent, children, isClosePopup) {
  const { isOpen, isRender, onClose, onOpen } = usePopup();

  useEffect(() => {
    if (isClosePopup) {
      onClose();
    }
  }, [isClosePopup]);

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
        Add new note
      </button>
      {isRender && (
        <div
          css={css`
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
          <div
            css={css`
              max-width: 300px;
              position: relative;
            `}
          >
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
            <ContentComponent onClose={onClose} />
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
export default Popup;
