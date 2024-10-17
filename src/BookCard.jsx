import React from 'react'

function BookCard({link}) {
    const bookLink = link.imageLink
      ? link.imageLink.thumbnail
      : "https://dictionary.cambridge.org/images/thumb/book_noun_001_01679.jpg?version=6.0.35";
  return (
    <div
      className="shadow-lg border border-gray-300 p-4 w-max hover:bg-gray-200 cursor-pointer object-cover transform translate-y-4
    transition ease-in-out duration-300 ml-5"
    >
      <div className="">
        <img src={bookLinkgi} alt="" className="w-48" />
      </div>
      <div>
        <div className="font-bold">Title</div>
        <div>Authors</div>
        <div className="text-gray-400">12/12/24</div>
      </div>
    </div>
  );
}

export default BookCard




