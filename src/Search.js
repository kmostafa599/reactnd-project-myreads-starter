import React from 'react'
import { Link } from 'react-router-dom'
import Book from "./Book";

function Search(props){
   return(
    <div>

    <div className="search-books">

    <div className="search-books-bar">
    <Link
    className="close-search"
    to = '/'
    >
    Close
    </Link>
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
      onChange={props.handleSearch}
    />
    </div>
    </div>
    <div className="search-books-results">
    <ol className="books-grid">
    {props.returnedBooks === undefined ? (
      <li />
    ) : Array.isArray(props.returnedBooks) ? (
      props.returnedBooks.map((book) => (
        
        <li key={book.id}>
          <Book
          allBooks={props.Allbooks}
          abooks={book}
            handleSelection={props.handleSelection}
          />
        </li>
      ))
    ) : (
      <li />
    )}
    </ol>
    </div>
    </div>
    </div>
   );

}

export default Search;