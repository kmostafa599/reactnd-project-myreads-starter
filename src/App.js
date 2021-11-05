import React from "react";
// import * as BooksAPI from './BooksAPI'
import * as BooksAPI from "./BooksAPI";
//import SelectBar from './SelectBar'
import "./App.css";
import Container from "./Container";
import Book from "./Book";
//import {BrowserRouter} from 'react-router-dom'
import {Route,Routes } from 'react-router-dom'


import { Link } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    searchForm: "",
    Allbooks: [],
    returnedBooks: [],
  };
  handleSearch = (e) => {
    let state = { ...this.state };
    if (e == "") {
      return;
    }
    BooksAPI.search(e.currentTarget.value).then((r) =>
      this.setState({ returnedBooks: r })
    );
    state[e.currentTarget.name] = e.currentTarget.value;
    this.setState(state);
  };
  componentDidMount = () => {
    //BooksAPI.getAll().then(response => this.setState(()=>{books : response}))
    BooksAPI.getAll().then((response) => this.setState({ Allbooks: response }));
  };
  //componentDidUpdate=()=>{

  handleSelection = (selection, book) => {
    //console.log("this book", book);
    BooksAPI.update(book, selection).then((response) =>
      this.setState((currentState) => {
        Allbooks: currentState.Allbooks.filter(
          (theBook) => theBook.id !== book.id
        ).concat(book);
      })
    );

    //console.log("this book", book);

    //book.shelf = selection
  };
  //}
  render() {
    return (
      <div className="app">
        <Routes>
        <Route path = "/search">
                        <Link
                className="close-search"
                to = '/'
              >
                Close
              </Link>
        <div className="search-books">
            <div className="search-books-bar">

              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input
                  type="text"
                  placeholder="Search by title or author"
                  onChange={this.handleSearch}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.returnedBooks == undefined ? (
                  <li />
                ) : Array.isArray(this.state.returnedBooks) ? (
                  this.state.returnedBooks.map((book) => (
                    <li key={book.id}>
                      <Book
                        abooks={book}
                        handleSelection={this.handleSelection}
                      />
                    </li>
                  ))
                ) : (
                  <li />
                )}
              </ol>
            </div>
          </div>
         </Route>

      <Route path = "/" >
        <Container
          books={this.state.Allbooks}
          handleSelection={this.handleSelection}
        />
          //container
      </Route>
</Routes>
      </div>


    );
  }
}

export default BooksApp;
