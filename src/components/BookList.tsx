import BookCard from "./bookCard/BookCard";
import { useGlobalContext } from "../BookContext";

const BookList = () => {
  const { books } = useGlobalContext();

  return (
    <div className="container">
      {books &&
        books.length > 0 &&
        books.map((book) => (
          <BookCard
            key={book.id}
            title={book.volumeInfo.title}
            author={
              book.volumeInfo.authors
                ? book.volumeInfo.authors.join(", ")
                : "Unknown Author"
            }
            thumbnail={book?.volumeInfo?.imageLinks?.thumbnail}
            publisher={
              book.volumeInfo.publisher
                ? book.volumeInfo.publisher
                : "*Publisher not available*"
            }
            description={
              book.volumeInfo.description
                ? book.volumeInfo.description
                : "*Book description not available*"
            }
            publishedDate={
              book.volumeInfo.publishedDate
                ? book.volumeInfo.publishedDate
                : "*Published date is not available*"
            }
            pageCount={
              book.volumeInfo.pageCount
                ? book.volumeInfo.pageCount
                : "*Page count not available*"
            }
            smallThumbnail={book?.volumeInfo?.imageLinks?.smallThumbnail}
          />
        ))}
    </div>
  );
};

export default BookList;
