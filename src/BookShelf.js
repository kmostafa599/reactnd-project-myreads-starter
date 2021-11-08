import React from "react";
import SelectBar from "./SelectBar";
import Book from "./Book";





function Shelf (props){
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {props.books.map((book) => (
              <li key={book.id}>
                <Book
                  allBooks={props.allBooks}
                  abooks={book}
                  handleSelection={props.handleSelection}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );

}







export default Shelf;
