/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const NoteItem = ({ note: { name } }) => (
  <div
    css={css`
      background: green;
    `}
  >
    <h2>{name}</h2>
  </div>
);

export default NoteItem;
