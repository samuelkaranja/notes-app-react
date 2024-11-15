import { createContext, useEffect, useState } from "react";
import { nanoid } from "nanoid";

export const NotesContext = createContext();

const GlobalState = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes-app-data"));
    if (savedNotes && savedNotes.length > 0) {
      setNotes(savedNotes);
    } else {
      localStorage.setItem("notes-app-data", JSON.stringify(notes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNewNote = () => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: noteText,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <NotesContext.Provider
      value={{
        notes,
        noteText,
        setNoteText,
        addNewNote,
        deleteNote,
        setSearchText,
        filteredNotes,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default GlobalState;
