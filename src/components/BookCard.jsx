import React from "react";
import { Link } from "react-router-dom";
import imageNotFound from "../assets/images/Image-not-found.png";

// assign bookInfo to book
function BookCard({ bookInfo: book, id }) {
  if (book.authors?.length > 3) {
    book.authors.length = 3; // Limit the number of authors to 3
    book.authors[2] += " and others"; // Add "and others" to indicate more authors
  }
  const author = book.authors?.join(", ");
  const imageLink = book.imageLinks?.thumbnail ?? imageNotFound;
  const title = book.title;
  const publishedDate = book.publishedDate;

  return (
    <Link
      to={"/" + id}
      className="
        border border-gray-600 drop-shadow-2xl rounded-md p-4 w-min-[15em] 
        hover:bg-white hover:text-black cursor-pointer object-cover 
        transform transition-all duration-500 ease-in-out hover:scale-105
        ml-5
      "
    >
      <div>
        <img src={imageLink} alt={title} className="w-full" />
      </div>
      <div>
        <div className="font-bold word-wrap">{title}</div>
        <div>{author ?? "Unknown Author"}</div>
        <span>{publishedDate}</span>
      </div>
    </Link>
  );
}

export default BookCard;

// // BookCard.js
// import React from "react";
// import { Link } from "react-router-dom";

// function BookCard({ authors, title, formats, id }) {
//   const author = authors && authors.length > 0 ? authors[0].name : "Unknown Author";
//   const imageLink = formats && formats["image/jpeg"] ? formats["image/jpeg"] : "https://dictionary.cambridge.org/images/thumb/book_noun_001_01679.jpg?version=6.0.35";

//   return (
//     <Link
//       to={`/books/${id}`} // Link to the SingleBook component using the book ID
//       className="
//         border border-gray-600 drop-shadow-2xl rounded-md p-4 w-min-[15em]
//         hover:bg-white hover:text-black cursor-pointer object-cover
//         transform transition-all duration-500 ease-in-out hover:scale-105
//         ml-5
//       "
//     >
//       <div>
//         <img src={imageLink} alt={title} className="w-full" />
//       </div>
//       <div>
//         <div className="font-bold word-wrap">{title}</div>
//         <div>{author}</div>
//       </div>
//     </Link>
//   );
// }

// export default BookCard;
