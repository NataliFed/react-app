import { useState } from "react";
import notes from "../../notes.json";
import NewNotes from "../Popup/components/NewNotes";
import Popup from "../Popup/components/Popup";
import NotesList from "./NotesList";

const NotesManager = () => {
  const [dataNotes, setNotes] = useState(notes);
  const [isClosePopup, setIsClosePopup] = useState(false);

  const addNote = (event) => {
    event.preventDefault();
    
    let id = function () {
      return '_' + Math.random().toString(36).substr(2, 9);
    };

    const note = {
      id: id(),
      name: event.target.name.value,
      description: event.target.description.value,
    }

     


    setNotes([...notes, note]);

    setIsClosePopup(true);

    setTimeout(() => {
      setIsClosePopup(false);
    }, 1000);
  };

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
