import NewNotes from "../Popup/components/NewNotes";
import Popup from "../Popup";
import useNoteManager from "./hooks/useNoteManager";
import NotesList from "./NotesList";

const NotesManager = () => {
  const { notes, addNote, isClosePopup } = useNoteManager();
  console.log('notes manager')
  return (
    <div>
      <Popup buttonName="Add new note" isClosePopup={isClosePopup}>
        <NewNotes onSubmit={addNote} />
      </Popup>
      <NotesList notes={notes} />
    </div>
  );
};

export default NotesManager;
