import { MdDeleteForever } from "react-icons/md";
import "./style.css";
import { useContext } from "react";
import { NotesContext } from "../context";

const Note = ({ note }) => {
  const { deleteNote } = useContext(NotesContext);

  return (
    <div className="note">
      <span>{note?.text}</span>
      <div className="note-footer">
        <small>{note?.date}</small>
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
