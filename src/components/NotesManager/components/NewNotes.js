/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function NewNotes({ onclose }) {
  const noteSubmit = function (event) {
    event.preventDefault();
    alert("Hello");
    onclose();
  };

  return (
    <form
      onSubmit={noteSubmit}
      css={css`
        width: 300px;
        background: #d1d1d1;
        border: 1px solid black;
        border-radius: 5px;
        padding: 15px 10px;
        box-shadow: 2px 3px 6px 0px #282727;
        margin: 100px auto;
        input {
          margin-bottom: 10px;
          width: 100%;
          box-sizing: border-box;
        }
      `}
    >
      <h3>You can enter your new note here</h3>
      <input name="notename" type="text" placeholder="Enter note name" />
      <input name="notetext" type="text" placeholder="Enter your note" />
      <button data-status="close"
        onClick={onclose}
        css={css`
          background: #9976dd;
          color: #fff;
          text-transform: uppercase;
          border: none;
          border-radius: 5px;
          padding: 5px 10px;
          cursor: pointer;
          margin-left: 55%;
        `}
      >
        Add new note
      </button>
    </form>
  );
}

export default NewNotes;
