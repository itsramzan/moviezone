import React, { useState, useEffect } from "react";
import Heading from "../Shared/Heading";
import { IoSearch } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";

const Search = () => {
  const { search: searchText } = useParams();

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setSearch(searchText ? searchText : "");
  }, [searchText]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };

  return (
    <div className="space-y-2">
      <Heading title="Search movies" />
      <form onSubmit={handleSearch} className="flex items-center relative">
        <IoSearch className="absolute left-2" />
        <input
          className="w-full text-sm font-semibold px-8 py-2 rounded-md transition duration-500 ring-2 ring-gray-200 focus:ring-blue-700"
          placeholder="Search movies"
          spellCheck="false"
          autoComplete="off"
          required
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
