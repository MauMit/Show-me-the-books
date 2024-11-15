import "./App.css";
import BookList from "./components/BookList";
import SearchBar from "./components/searchBar/SearchBar";
import bookAnimation from './assets/book-animation.gif';

function App() {
  return (
    <div>
      <img src={bookAnimation} alt="bookanimation" />
      <SearchBar />
      <BookList />
    </div>
  );
}

export default App;
