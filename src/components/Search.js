//clearimport React from "react";

//function Search() {
  //return (
    //<div className="searchbar">
      //<label htmlFor="search">Search Plants:</label>
      //<input
        //type="text"
        //id="search"
        //placeholder="Type a name to search..."
        //onChange={(e) => console.log("Searching...")}
      ///>
    //</div>
  //);
//}

//export default Search;

function Search({ search, onSearchChange }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Search;


