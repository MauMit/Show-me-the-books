import { useGlobalContext } from "../BookContext";

const useFetchBooks = () => {
    const { setBooks } = useGlobalContext();
  
   const fetchBooks = async(query : string) =>{
    try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${query}`
        );
        const data = await response.json();
        if (data.items) {
          setBooks(data.items);
        } else {
          alert("No Books Found");
        }
      } catch (error) {
        console.error("Something went wrong", error);
      }
   }
    return {fetchBooks}
  };

  export default useFetchBooks;