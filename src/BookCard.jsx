


import React from "react";
import { Link } from "react-router-dom";

function BookCard({ authors, title, formats, to }) {
  console.log(authors, "authors");

  const author = authors[0];
  const imageLink = formats["image/jpeg"];

  return (
    <Link
      to={to}
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
        {/* You can add more details here if needed */}
         <div>{author ? author.name : "Unknown Author"}</div>
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
