import notes from "../../notes.json";
import NotesList from "./NotesList";

const NotesManager = () => {
  return (
    <div>
      <h1>Notes Manager</h1>
      <NotesList notes={notes} />
    </div>
  );
};

export default NotesManager;
