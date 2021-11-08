import React from "react";
// import * as BooksAPI from './BooksAPI'
import * as BooksAPI from "./BooksAPI";
//import SelectBar from './SelectBar'
import "./App.css";
import Container from "./Container";
import Book from "./Book";
//import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Search from './Search'

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
    if (e === "") {
      return ;
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
    BooksAPI.update(book, selection).then((response) =>{
      book.shelf = selection;
      this.setState((currentState) => ({
        Allbooks: currentState.Allbooks.filter(
          (theBook) => theBook.id !== book.id
        ).concat(book)
      }));
    });
    //console.log("this book", book);

    //book.shelf = selection
  };
  //}
  render() {
    return (
      <div className="app">
          <Route path = "/search" render ={()=>(
            <Search returnedBooks ={this.state.returnedBooks} handleSearch={this.handleSearch}/>
          )}>

        </Route>

      <Route exact path = "/" >
        <Container
        
          books={this.state.Allbooks}
          handleSelection={this.handleSelection}
        />
      </Route>
      </div>


    );
  }
}

export default BooksApp;
