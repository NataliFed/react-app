/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import NotesManager from "./components/NotesManager";
import Popup from "./components/Popup/components/Popup";
import NewNotes from "./components/Popup/components/NewNotes";

function App() {
  return (
    <div
      css={css`
        max-width: 1200px;
        margin: auto;
      `}
    >
      <NotesManager />
    </div>
  );
}

export default App;
