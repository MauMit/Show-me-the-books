import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { BookModel } from "./interfaces/BookModel";

interface ContextType {
  books: BookModel[];
  setBooks: Dispatch<SetStateAction<BookModel[]>>;
}
const Context = createContext<ContextType | undefined>(undefined);

interface ProviderProps {
  children: React.ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
  const [books, setBooks] = useState<BookModel[]>([]);

  return (
    <Context.Provider value={{ books, setBooks }}>{children}</Context.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useGlobalContext must be used within a Provider");
  }
  return context;
};
