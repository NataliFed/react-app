/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import NoteItem from "./NoteItem";

const NotesList = ({ notes }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        @media (max-width: 768px) {
          justify-content: center;
        }
      `}
    >
      {notes.map((item) => (
        <NoteItem key={item.id} data={item} />
      ))}
    </div>
  );
};

export default NotesList;
