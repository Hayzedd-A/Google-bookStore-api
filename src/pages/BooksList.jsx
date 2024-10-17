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
  console.log(books);
  return (
    <div className="books-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {books.map(({ volumeInfo }) => (
        <BookCard data={volumeInfo} />
      ))}
    </div>
  );
};

export default BooksList;
