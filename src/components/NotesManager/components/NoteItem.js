/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const NoteItem = ({ data: { name, date, description } }) => (
  <div
    css={css`
      width: 200px;
      background: #d1d1d1;
      border: 1px solid black;
      border-radius: 5px;
      padding: 15px 10px;
      box-shadow: 2px 3px 6px 0px #282727;
      margin: 15px;
      p,
      div {
        border: 1px solid black;
        padding: 15px 10px;
      }
    `}
  >
    <h3>{name}</h3>
    <p>{date}</p>
    <div>{description}</div>
  </div>
);

export default NoteItem;
