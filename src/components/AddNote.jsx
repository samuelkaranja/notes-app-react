import { useContext, useEffect } from "react";
import { NotesContext } from "../context";
import "./style.css";

const AddNote = () => {
  const { noteText, setNoteText, addNewNote } = useContext(NotesContext);
  const characterCount = 200;

  const handleTextChange = (e) => {
    if (characterCount - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      addNewNote();
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note...."
        value={noteText}
        onChange={handleTextChange}
      ></textarea>

      <div className="note-footer">
        <small>{characterCount - noteText.length} Remianing</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
