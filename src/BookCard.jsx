import React from "react";

function BookCard({ data }, ...rest) {
  // const bookLink = link.imageLink
  //   ? link.imageLink.thumbnail
  //   : "https://dictionary.cambridge.org/images/thumb/book_noun_001_01679.jpg?version=6.0.35";
  const imageLink = data.imageLinks
    ? data.imageLinks.thumbnail
    : data.previewLink;
  console.log(rest);
  return (
    <div
      className="shadow-lg border border-gray-300 p-4 w-min-[15em] hover:bg-gray-200 cursor-pointer object-cover transform translate-y-4
    transition ease-in-out duration-300 ml-5"
    >
      <div className="">
        <img src={imageLink} alt="" className="w-full" />
      </div>
      <div>
        <div className="font-bold word-wrap">{data.title}</div>
        <div>{data.authors.join(", ")}</div>
        <div className="text-gray-400">{data.publishedDate}</div>
      </div>
    </div>
  );
}

export default BookCard;
