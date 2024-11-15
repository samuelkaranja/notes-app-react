import { useContext } from "react";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import { NotesContext } from "./context";
import "./components/style.css";

function App() {
  const { darkMode } = useContext(NotesContext);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <div className="container">
        <Header />
        <Search />
        <NotesList />
      </div>
    </div>
  );
}

export default App;
