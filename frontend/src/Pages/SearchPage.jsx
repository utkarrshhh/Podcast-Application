import React from "react";
import "../App.css";
import NavBar from "../Components/NavBar/NavBar";
import SearchResults from "../Components/SearchResults/SearchResults.jsx"
export default function SearchPage() {
  return (
    <>
    <NavBar />
    <div className="search-results">
    <SearchResults />
    </div>
    </>
  );
}
