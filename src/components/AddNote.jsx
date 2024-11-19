import { useContext, useEffect } from "react";
import { NotesContext } from "../context";
import EmojiPicker from "emoji-picker-react";
import "./style.css";

const AddNote = () => {
  const { noteText, setNoteText, addNewNote, open, setOpen } =
    useContext(NotesContext);
  const characterCount = 200;

  const handleTextChange = (e) => {
    if (characterCount - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handleEmoji = (e) => {
    setNoteText((prevText) => prevText + e.emoji); // Append emoji to noteText
    setOpen(false); // Close picker
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      addNewNote();
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
      <div className="emoji">
        <img
          src="./emoji.png"
          alt=""
          onClick={() => setOpen((prev) => !prev)}
        />
        {open && (
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        )}
      </div>

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
