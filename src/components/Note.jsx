import { MdDeleteForever, MdEdit } from "react-icons/md";
import "./style.css";
import { useContext, useState } from "react";
import { NotesContext } from "../context";
import EmojiPicker from "emoji-picker-react";

const Note = ({ note }) => {
  const { deleteNote, editNote } = useContext(NotesContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(note.text);
  const [open, setOpen] = useState(false);

  const handleSaveEdit = () => {
    if (editedText.trim().length > 0) {
      editNote(note.id, editedText);
      setIsEditing(false);
      setOpen(false);
    }
  };

  // Handle emoji selection
  const handleEmoji = (emojiObject) => {
    setEditedText((prevText) => prevText + emojiObject.emoji); // Append emoji to editedText
    setOpen(false); // Close picker after selection
  };

  return (
    <div className="note">
      {isEditing ? (
        <>
          <textarea
            rows="5"
            cols="10"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          ></textarea>
          <div className="emoji">
            <img
              src="./emoji.png"
              alt="emoji"
              onClick={() => setOpen((prev) => !prev)}
              style={{ cursor: "pointer" }}
            />
            {open && (
              <div className="picker">
                <EmojiPicker onEmojiClick={handleEmoji} />
              </div>
            )}
          </div>
        </>
      ) : (
        <span>{note?.text}</span>
      )}
      <div className="note-footer">
        <small>{note?.date}</small>
        {isEditing ? (
          <button onClick={handleSaveEdit} className="save">
            Save
          </button>
        ) : (
          <MdEdit
            onClick={() => setIsEditing(true)}
            className="edit-icon"
            size="1.3em"
          />
        )}
        <MdDeleteForever
          onClick={() => deleteNote(note.id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
