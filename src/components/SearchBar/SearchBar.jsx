import { useId } from "react";
import css from "./SearchBar.module.css";

const SearchBar = ({ value, onFilter }) => {
  const searchId = useId();

  return (
    <div>
      <label htmlFor={searchId}> Find contacts by name</label>
      <input
        className={css.searchbar}
        type="text"
        value={value}
        onChange={e => onFilter(e.target.value)}
        id={searchId}
      />
      {/* <p>{inputValue}</p> */}
    </div>
  );
};

export default SearchBar;
