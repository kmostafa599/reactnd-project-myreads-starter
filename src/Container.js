import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import Shelf from "./BookShelf";
import {Link} from 'react-router-dom'


function Container (props){


  //handleSelection = (selection) => {};

    // console.log(this.props.books)
    //console.log(this.props.books.filter(book => book.shelf === "wantToRead"))
    return (
      
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf
            shelfName="Currently Reading"
            books={props.books.filter(
              (book) => book.shelf === "currentlyReading"
            )}
            handleSelection={props.handleSelection}
          />
          <Shelf
            shelfName="Want to read"
            books={props.books.filter(
              (book) => book.shelf === "wantToRead"
            )}
            handleSelection={props.handleSelection}
          />
          <Shelf
            shelfName="Read"
            books={props.books.filter((book) => book.shelf === "read")}
            handleSelection={props.handleSelection}
          />
        </div>
        <div className="open-search">
          <Link to = "/search">
            Add a book
          </Link>
        </div>
      </div>
    );
  

}


export default Container;
