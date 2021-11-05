import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import Shelf from "./BookShelf";
import {Link} from 'react-router-dom'


class Container extends React.Component {
  //handleSelection = (selection) => {};
  render() {
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
            books={this.props.books.filter(
              (book) => book.shelf === "currentlyReading"
            )}
            handleSelection={this.props.handleSelection}
          />
          <Shelf
            shelfName="Want to read"
            books={this.props.books.filter(
              (book) => book.shelf === "wantToRead"
            )}
            handleSelection={this.props.handleSelection}
          />
          <Shelf
            shelfName="Read"
            books={this.props.books.filter((book) => book.shelf === "read")}
            handleSelection={this.props.handleSelection}
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
}

export default Container;
