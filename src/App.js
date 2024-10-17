
import "./App.css";
import BookStoreApi from "./pages/BookStoreApi";
import BooksList from "./pages/BooksList";
import GoogleApi from "./pages/GoogleApi";

function App() {
  return (
    <div className="container">
      {/* Render the components */}
      {/* <BookStoreApi /> */}
      <GoogleApi />
      {/* <BooksList/> */}
    </div>
  );
}

export default App;

