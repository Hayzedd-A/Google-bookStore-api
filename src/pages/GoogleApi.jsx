
// GoogleApi.js
import React, { useEffect, useState } from "react";
import BookCard from "./../BookCard"; // Importing BookCard component to display individual book details
import BookStoreNav from "./BookStoreNav"; // Importing navigation component for the book store

const GoogleApi = () => {
  // State declarations
  const [books, setBooks] = useState([]); // State to store fetched book data
  const [input, setInput] = useState(""); // State to manage input for searching books
  const [loading, setLoading] = useState(true); // State to track loading status

  // Effect to fetch books when the component mounts
  useEffect(() => {
    fetchBooks(); // Fetch books when the component mounts
  }, []);

  // Function to fetch books from the API
  const fetchBooks = async () => {
    const url = `https://gutendex.com/books`; // API endpoint for fetching books
    setLoading(true); // Set loading to true before fetching data

    try {
      const response = await fetch(url); // Fetch data from the API
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`); // Throw error for non-200 responses
      }
      const data = await response.json(); // Parse the JSON response
      setBooks(data.results || []); // Set the fetched books to state, or reset to empty array
    } catch (error) {
      console.error("Error fetching books:", error); // Log any errors during the fetch
    } finally {
      setLoading(false); // Set loading to false after fetching is complete
    }
  };

  // Filter books based on user input
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(input.toLowerCase()) // Check if book title includes input
  );

  // Render component
  return (
    <div>
      <BookStoreNav input={input} setInput={setInput} /> {/* Render navigation bar with input state */}
      <div className="mt-40"> {/* Adjusted the margin to accommodate navbar */}
        {loading ? ( // Show the spinner if loading is true
          <LoadingSpinner />
        ) : (
          <BookList books={filteredBooks} /> // Render list of books
        )}
      </div>
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
    {books.map((book) => (
      <BookCard key={book.id} {...book} /> // Pass the entire book object as props to BookCard
    ))}
  </div>
);

export default GoogleApi; // Exporting the GoogleApi component for use in other parts of the application
