import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";



function SelectBar (props){

  const theBook = props.book;
  //console.log("TheBook in selectBar",theBook)
  return (
    <select
      value={theBook.shelf ? theBook.shelf : (theBook.shelf = "none")}
      onChange={(e) => props.selection(e.target.value, theBook)}
    >
      <option value="move" disabled>
        Move to...
      </option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  );


  
}

export default SelectBar;
