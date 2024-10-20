import React, { useState } from "react";
import { Link } from "react-router-dom";

const BookStoreNav = ({ input, setInput }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState("")

  // Toggle the mobile menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle search input changes
  const searchBook = () => {
    
    

    setInput(searchOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with link to the homepage */}
        <Link to="/" className="text-5xl font-bold">
          IBRAHIM's Bookstore
        </Link>
        <div className="flex items-center space-x-4">
          {/* Desktop search input, hidden on smaller screens */}
          <input
            className="hidden md:block py-2 px-4 rounded-lg focus:outline-none bg-white text-black"
            type="text"
            placeholder="Search for books..."
            // value={input}
            onChange={(e) => setSearchOpen(e.target.value)}
            onKeyUp={(e) => e.key === "Enter" && searchBook()}
          />
          {/* Hamburger menu button for mobile view */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile search input (visible when the menu is open) */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden mt-2 border-t border-gray-600 pt-2`}
      >
        <input
          className="py-2 px-4 focus:outline-none bg-transparent"
          type="text"
          placeholder="Search for books..."
          value={input}
          onChange={searchBook}
        />
      </div>
    </nav>
  );
};

export default BookStoreNav;







// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const BookStoreNav = ({ input, setInput }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState("");

//   // Toggle the mobile menu open/close
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   // Handle search input changes
//   const searchBook = () => {
//     setInput(searchOpen);
//     // Implement search logic here
//     console.log("Searching for:", searchOpen);
//   };

//   return (
//     <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-10 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo with link to the homepage */}
//         <Link to="/" className="text-5xl font-bold">
//           IBRAHIM's Bookstore
//         </Link>
//         <div className="flex items-center space-x-4">
//           {/* Desktop search input with search icon */}
//           <div className="hidden md:flex items-center relative">
//             <input
//               className="py-2 px-5 rounded-lg focus:outline-none bg-white text-black pr-10 w-70"
//               type="text"
//               placeholder="Search for books..."
//               value={searchOpen}
//               onChange={(e) => setSearchOpen(e.target.value)}
//               onKeyUp={(e) => e.key === "Enter" && searchBook()}
//             />
//             {/* Search icon inside the input */}
//             <button
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
//               onClick={searchBook}
//             >
//               <svg
//                 className="w-5 h-5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M21 21l-4.35-4.35m0 0a8.5 8.5 0 1112.1 0 8.5 8.5 0 01-12.1 0z"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//           {/* Hamburger menu button for mobile view */}
//           <button
//             className="md:hidden text-white focus:outline-none"
//             onClick={toggleMenu}
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//       {/* Mobile search input (visible when the menu is open) */}
//       <div
//         className={`${
//           isOpen ? "block" : "hidden"
//         } md:hidden mt-2 border-t border-gray-600 pt-2`}
//       >
//         <div className="flex items-center realtive">
//           <input
//             className="py-2 px-4 focus:outline-none bg-transparent flex-grow"
//             type="text"
//             placeholder="Search for books..."
//             value={searchOpen}
//             onChange={(e) => setSearchOpen(e.target.value)}
//           />
//           <button
//             className=" abosolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
//             onClick={searchBook}
//           >
//             <svg
//               className="w-5 h-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M21 21l-4.35-4.35m0 0a8.5 8.5 0 1112.1 0 8.5 8.5 0 01-12.1 0z"
//               ></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default BookStoreNav;

