// import React from 'react'

// const BooksList =((books)) => {
//   return (
//     <div>
//       {books.map((book) =>(
//         <div className='book-container'>
//           {book.volumeInfo.imageLinks &&}
//           <img src ={book.volumeInfo.imageLinks.smallThumbnail} alt=""/>

//           <div/>
//       ))}

//     </div>
//   )
// }

// export default BooksList

import React from "react";
import BookCard from "../BookCard";

const BooksList = ({ books }) => {
  console.log(books)
  return (
    <div className="books-list">
      {books.map((book) => (
       <BookCard link={book.volumeInfo.imageLinks.thumbnail}/>
      ))}
      
    </div>
  );
};

export default BooksList;
