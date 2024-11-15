import { MdSearch } from "react-icons/md";
import { useContext } from "react";
import { NotesContext } from "../context";
import "./style.css";

const Search = () => {
  const { setSearchText } = useContext(NotesContext);

  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input
        type="text"
        placeholder="type to search..."
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default Search;
