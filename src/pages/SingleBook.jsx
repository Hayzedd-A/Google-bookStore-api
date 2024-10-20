
// SingleBook.js
import React, { useEffect, useState } from "react";
import imageNotFound from "../assets/images/Image-not-found.png";
import { useParams, Link } from "react-router-dom";

const SingleBook = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  // States for book details
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [publisherInfo, setPublisherInfo] = useState("");
  const [description, setDescription] = useState("");
  const [publishedDate, setPublishedDate] = useState("");

  // Fetch book details when component mounts or ID changes
  useEffect(() => {
    fetchBookDetails();
  }, [id]);

  // Function to fetch book details from the API
  const fetchBookDetails = async () => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${id}`;
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      const bookData = data.items[0].volumeInfo;
      
      // Set book details to state
      setBook(bookData);
      setAuthor(bookData.authors?.join(", "));
      setImageLink(bookData.imageLinks?.thumbnail ?? imageNotFound);
      setTitle(bookData.title);
      setPublishedDate(bookData.publishedDate);
      setDescription(bookData.description || "No description available");
      setPublisherInfo(bookData.publisher || "Unknown publisher");
    } catch (error) {
      console.error("Error fetching book details:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="mt-5 flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-solid rounded-full border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (!book) {
    return <div className="text-center">Book not found</div>;
  }
// f5f0e1;
// f6ead4;
  return (
    <div
      className=" min-h-screen p-8"
      style={{ backgroundColor: "#f5f0e1" }} // Replace with your desired color
    >
      <div className="container mx-auto flex flex-col items-center">
        <img
          src={imageLink}
          alt={title}
          className="w-64 h-96 object-cover rounded-md mb-4"
        />
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="text-lg mb-2">Author(s): {author}</p>
        <p className="text-lg mb-2">Publisher: {publisherInfo}</p>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <Link
          to="/"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default SingleBook;

