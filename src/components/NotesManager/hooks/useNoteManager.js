import { useState } from "react";
import dataNotes from "../../../notes.json";
import { useStorage } from "../../../shared";

const useNoteManager = () => {
  const { setJsonItem, getJsonItem } = useStorage();

  if (!getJsonItem("notes")) {
    setJsonItem("notes", dataNotes);
  }
  const [notes, setNotes] = useState(getJsonItem("notes"));
  const [isClosePopup, setIsClosePopup] = useState(false);

  const addNote = (event) => {
    event.preventDefault();

    let id = function () {
      return "_" + Math.random().toString(36).substr(2, 9);
    };

    const note = {
      id: id(),
      name: event.target.name.value,
      description: event.target.description.value,
    };

    const newNotes = [...notes, note];

    setJsonItem("notes", newNotes);

    setNotes(newNotes);

    setIsClosePopup(true);

    setTimeout(() => {
      setIsClosePopup(false);
    }, 1000);
  };

  return {
    notes,
    addNote,
    isClosePopup,
  };
};

export default useNoteManager;
