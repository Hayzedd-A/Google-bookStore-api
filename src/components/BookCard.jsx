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
