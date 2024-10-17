// import React, { useEffect } from "react";
// // import BookStoreApi from './BookStoreApi';
// import { useState } from "react";
// import BooksList from "./BooksList";

// const GoogleApi = () => {
//   const [books, setBooks] = useState([]);
//   const [input, setInput] = useState("");

//   useEffect(() => {
//     getBooks();
//   },[input]);
//   const getBooks = async () => {
//     const url = "https://www.googleapis.com/books/v1/volumes?q=javascript";
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data.items);
//     if(data.items){

//       setBooks(data.items);
//     }
//   };
//   return (
//     <>
//       <div>
//         {/* {books.map((books)=>(
//         // <h1 key={books.id}>{books.volumeInfo.title}</h1>
//       ))}
//  */}{" "}
//         <div className="input-container">
//           <input type="text " value={input} onChange={(e) =>{setInput(e.target.value)}} />
//         </div>
//         <BooksList books={books} />
//       </div>
//     </>
//   );
// };

// export default GoogleApi;






// import React, { useEffect, useState } from "react";
// import BooksList from "./BooksList";
// import BookCard from "../BookCard";

// const GoogleApi = () => {
//   const [books, setBooks] = useState([]);
//   const [input, setInput] = useState("");

//   useEffect(() => {
//     if (input) {
//       getBooks();
//     }
//   }, [input]);

//   const getBooks = async () => {
//     const url = `https://www.googleapis.com/books/v1/volumes?q=${input}`;
//     try {
//       const res = await fetch(url);
//       const data = await res.json();
//       console.log(data.items);
//       if (data.items) {
//         setBooks(data.items);
//       } else {
//         setBooks([]); // Clear the list if no items are found
//       }
//     } catch (error) {
//       console.error("Error fetching books:", error);
//     }
//   };

//   return (
//     <>
//       <div>
//         {/* <GoogleApi/> */}
//         <div className="flex justify-center mt-5">
//           <input
//             className="py-2 px-4 border border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-blue-600"
//             type="text"
//             placeholder="Search for books..."
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             />
//             <nav>
//             <div className="flex">
//               {/* <h1 className="text-3xl font-bold text-">
//                 Honourable Book Store
//               </h1> */}
//               <button
//                 type="submit"
//                 className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 Search
//               </button>
//             </div>
//           </nav>
//         </div>
//         <BooksList books={books} />
//         <BookCard link="http://books.google.com/books/content?id=8D4HVx0apZQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
//       </div>
//     </>
//   );
// };

// export default GoogleApi;










import React, { useEffect, useState } from "react";
import BooksList from "./BooksList";
import BookCard from "../BookCard";


const GoogleApi = () => {
  const [books, setBooks] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (input) {
      getBooks();
    }
  }, [input]);

  const getBooks = async () => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${input}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.items);
      if (data.items) {
        setBooks(data.items);
      } else {
        setBooks([]); // Clear the list if no items are found
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <>
      <div>
        <div className="bg-gray-800 text-whit p-4">
          <div className="container mx-auto flex justify-between items-center mr-5">
            <h1 className="text-white text-2xl font-bold">
              DrucStoc. Bookstore
            </h1>
            <div className="flex items-center space-x-4 rounded-lg">
              <input
                className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                placeholder="Search for books..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="submit"
                className="bg-white text-blue-600 hover:bg-gray-200 font-bold py-2 px-4 rounded-lg"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <BooksList books={books} />
        <BookCard link="http://books.google.com/books/content?id=8D4HVx0apZQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
      </div>
    </>
  );
};

export default GoogleApi;
