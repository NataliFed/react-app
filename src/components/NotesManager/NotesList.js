/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import NoteItem from "./NoteItem";

const NotesList = ({ notes }) => {
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NotesList;
