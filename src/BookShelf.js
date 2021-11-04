import React from "react";
import SelectBar from "./SelectBar";
import Book from "./Book";





function Shelf (props){
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => (
              <li key={book.id}>
                <Book
                  abooks={book}
                  handleSelection={this.props.handleSelection}
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
