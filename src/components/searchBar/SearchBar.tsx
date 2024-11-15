import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import useFetchBooks from "../../hooks/useFetchBooks";

const SearchBar = () => {
  const [search, setSearch] = useState<string>("");
  const [runSearch, setRunSearch] = useState<boolean>(false);
  const { fetchBooks } = useFetchBooks();

  useEffect(() => {
    if (runSearch) {
      console.log(search);
      fetchBooks(search);
      setRunSearch(false);
      setSearch("");
    }
  }, [runSearch]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRunSearch(true);
  };

  return (
    <div className="search-container">
      <div className="input-wrapper">
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="search"
            placeholder="Search For Title or Author"
            value={search}
            onChange={handleChange}
          />
          <button className="search-button" type="submit">
            Enter
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
