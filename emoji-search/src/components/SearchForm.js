import { useContext } from "react";
import { SearchContext } from "../context/FormContext";

const SearchForm = () => {
  const { search, setSearch } = useContext(SearchContext);

  return (
    <input
      type="text"
      id="search"
      name="search"
      placeholder="Find the most relevant emojis"
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
      }}
    />
  );
};

export default SearchForm;
