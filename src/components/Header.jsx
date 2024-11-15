import { useContext } from "react";
import { NotesContext } from "../context";
import "./style.css";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(NotesContext);

  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() => setDarkMode((prevDarkMode) => !prevDarkMode)}
        className="save"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Header;
