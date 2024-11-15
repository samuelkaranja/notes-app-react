import { useContext } from "react";
import Note from "./Note";
import AddNote from "./AddNote";
import { NotesContext } from "../context";
import { MdArrowCircleRight } from "react-icons/md";
import "./style.css";

const NotesList = () => {
  const { filteredNotes } = useContext(NotesContext);

  return (
    <div className="notes-list">
      {filteredNotes.length > 0 ? (
        filteredNotes.map((note) => <Note note={note} key={note.id} />)
      ) : (
        <div
          className="lt"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1>No notes available...</h1>
          <h3>Add a Note</h3>
          <MdArrowCircleRight size="1.4em" color="blue" />
        </div>
      )}

      <AddNote />
    </div>
  );
};

export default NotesList;
