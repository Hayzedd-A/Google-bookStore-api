import React from "react";
const BookStoreApi = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-3xl font-bold">Honourable Book Store</h1>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search books..."
          className="py-2 px-4 border border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-gray-600"
        />
        <button
          type="submit"
          className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </div>
    </nav>
  );
};

export default BookStoreApi;

//  <BookStoreApi/>
// <GoogleApi/>
