

import "./App.css";
// import BookStoreApi from "./pages/BookStoreNav";
import GoogleApi from "./pages/GoogleApi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleBook from "./pages/SingleBook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GoogleApi />} />
        <Route path="/:id" element={<SingleBook />} />

        {/* Render the components */}
        {/* <BookStoreApi /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

