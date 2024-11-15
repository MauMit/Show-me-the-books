import defaultImage from "../../assets/noBook.jpg";

interface BookContentProps {
  title: string;
  author: string | string[];
  publisher: string;
  description: string;
  publishedDate: string;
  pageCount: string;
  smallThumbnail: string | undefined;
}

const BookContent = ({
  title,
  author,
  publisher,
  description,
  publishedDate,
  pageCount,
  smallThumbnail,
}: BookContentProps) => {
  return (
    <div>
      <img
        src={smallThumbnail || defaultImage}
        alt="title"
        className="smallImage"
      />

      <p>
        <b>Title: </b>
        {title}
      </p>
      <p className="description">
        <b>Description: </b>
        <i> {description}</i>
      </p>
      <p>
        <b>Author: </b>
        {author}
      </p>
      <p>
        <b>Publisher: </b>
        {publisher}
      </p>
      <p>
        <b>Published Date: </b>
        {publishedDate}
      </p>
      <p>
        <b>Page Count: </b>
        {pageCount}
      </p>
    </div>
  );
};

export default BookContent;
