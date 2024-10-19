// GoogleApi.js
import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard"; // Importing BookCard component to display individual book details
import BookStoreNav from "./BookStoreNav"; // Importing navigation component for the book store

const GoogleApi = () => {
  // State declarations
  const [books, setBooks] = useState([]); // State to store fetched book data
  const [input, setInput] = useState(""); // State to manage input for searching books
  const [loading, setLoading] = useState(true); // State to track loading status
  const [disabled, setDisabled] = useState(false);
  const [startIndex, setStartIndex] = useState(0); // State to keep track of the current page

  // Effect to fetch books when the component mounts
  useEffect(() => {
    fetchBooks(input); // Fetch books when the component mounts
  }, [input]); // Only fetch books when searchValue changes

  // Function to handle search input changes
  // setSearchValue(input.length > 3 && input);

  // Function to fetch books from the API
  const fetchBooks = async (query, start = 0) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20&startIndex=${start}`; // API endpoint for fetching books

    try {
      const response = await fetch(url); // Fetch data from the API
      setLoading(true); // Set loading to true before fetching data

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`); // Throw error for non-200 responses
      }
      const data = await response.json(); // Parse the JSON response
      setBooks(data.items || []); // Set the fetched books to state, or reset to empty array
      console.log(books);
    } catch (error) {
      setBooks([]);
      console.error("Error fetching books:", error); // Log any errors during the fetch
    } finally {
      setLoading(false); // Set loading to false after fetching is complete
    }
  };
  const loadMore = async () => {
    setDisabled(true); // Disable the button while loading more books
    // setStartIndex(prev => prev + 20);
    const url = `https://www.googleapis.com/books/v1/volumes?q=${input}&maxResults=20&startIndex=${
      startIndex + 20
    }`; // API endpoint for fetching books

    try {
      const response = await fetch(url); // Fetch data from the API
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`); // Throw error for non-200 responses
      }
      const data = await response.json(); // Parse the JSON response
      console.log(data);
      setBooks(prevBooks => [...prevBooks, ...data.items]); // add the result to the previous result
      setDisabled(false);
      console.log(books);
    } catch (error) {
      console.error("Error fetching books:", error); // Log any errors during the fetch
    }
  };

  // Filter books based on user input
  // const filteredBooks = books.filter(
  //   book => book.title.toLowerCase().includes(input.toLowerCase()) // Check if book title includes input
  // );

  // Render component
  return (
    <div className="p-b-8">
      <BookStoreNav input={input} setInput={setInput} />{" "}
      {/* Render navigation bar with input state */}
      <div className="mt-40">
        {" "}
        {/* Adjusted the margin to accommodate navbar */}
        {loading ? ( // Show the spinner if loading is true
          <LoadingSpinner />
        ) : (
          <BookList books={books} /> // Render list of books
        )}
      </div>
      {/* A load more button */}
      {books.length > 0 && (
        <div className="flex justify-center">
          <button
            disabled={disabled}
            onClick={() => {
              loadMore(); // Fetch new books
            }}
            className="py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen ">
    <div className="w-16 h-16 border-4 border-blue-500 border-solid rounded-full border-t-transparent animate-spin"></div>
  </div>
);

// Book list component
const BookList = ({ books }) => (
  <div className="books-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4">
    {books.map(book => (
      <BookCard key={book.id} bookInfo={book.volumeInfo} /> // Pass the entire book object as props to BookCard
    ))}
  </div>
);

export default GoogleApi; // Exporting the GoogleApi component for use in other parts of the application
