import NewNotes from "../Popup/components/NewNotes";
import Popup from "../Popup/components/Popup";
import useNoteManager from "./hooks/useNoteManager";
import NotesList from "./NotesList";

const NotesManager = () => {
  const { notes, addNote, isClosePopup } = useNoteManager();
  
  return (
    <div>
      <Popup isClosePopup={isClosePopup}>
        <NewNotes onSubmit={addNote} />
      </Popup>
      <NotesList notes={notes} />
    </div>
  );
};

export default NotesManager;
