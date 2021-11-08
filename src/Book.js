import React from "react";
import SelectBar from "./SelectBar";


function Book (props){
  

    const theBook = props.abooks;
    console.log("array of books", theBook);

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={
              theBook.imageLinks == undefined
                ? {
                    width: 128,
                    height: 193,
                    backgroundImage: "",
                  }
                : {
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${theBook.imageLinks.thumbnail})`,
                  }
            }
          />

          <div className="book-shelf-changer">
            <SelectBar allBooks={props.allBooks} book={theBook} selection={props.handleSelection} />
          </div>
        </div>
        <div className="book-title">{theBook.title}</div>
        <div className="book-authors">{theBook.authors}</div>
        <div className="book-published">{theBook.publishedDate}</div>
      </div>
    );
  }
 
export default Book;
