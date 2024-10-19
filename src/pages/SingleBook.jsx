
// SingleBook.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import BookCard from "../BookCard";

const SingleBook = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookDetails();
  }, [id]);

  const fetchBookDetails = async () => {
    const url = `https://gutendex.com/books/${id}`;
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setBook(data);
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

  return (
    <div className="bg-gray-300 min-h-screen p-8">
      <div className="container mx-auto flex flex-col items-center">
        <img
          src={book.image} // Assuming the API returns an `image` field
          alt={book.title}
          className="w-64 h-96 object-cover rounded-md mb-4"
        />
        <h2 className="text-3xl font-bold mb-2">{book.title}</h2>
        <p className="text-lg mb-2">Author(s): {book.authors.join(", ")}</p>
        <p className="text-gray-700 text-base mb-4">{book.description}</p>
        <Link to="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Home
        </Link>
      </div>
      <BookCard/>
    </div>
  );
};

export default SingleBook;






















































// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// function SingleBook() {
//   const { id } = useParams();

//   const [books, setBooks] = useState({});

//   useEffect(() => {
//     getBooks();
//   }, []);

//   const getBooks = async () => {
//     const url = `https://gutendex.com/books/${id}`;
//     try {
//       const res = await fetch(url);
//       const data = await res.json();
//       if (data) {
//         console.log(data, "data");
//         setBooks(data);
//       } else {
//         setBooks([]); // Clear the list if no items are found
//       }
//     } catch (error) {
//       console.error("Error fetching books:", error);
//     }
    
//   };

//   return (
//     <div>
//       <div>
//         <img src="" alt="" />
//       </div>
//       <div>
//         <div>ggdhdfhfbe</div>
//         <div>cguc</div>
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>
//     </div>
//   );
// }

// export default SingleBook;
