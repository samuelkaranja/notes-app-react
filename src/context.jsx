import { createContext, useEffect, useState } from "react";
import { nanoid } from "nanoid"; // Generates random id

export const NotesContext = createContext();

const GlobalState = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Collects saved notes from localstorage

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes-app-data"));
    if (savedNotes && savedNotes.length > 0) {
      setNotes(savedNotes);
    } else {
      localStorage.setItem("notes-app-data", JSON.stringify(notes));
    }
  }, []);

  // Saves notes to localstorage

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

  // deletes a note

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  // filters the notes

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
