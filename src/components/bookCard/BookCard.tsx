import { useState } from "react";
import "../../App.css";

import "./BookCard.css";
import Modal from "../modal/Modal";
import Card from "./Card";
import BookContent from "./BookContent";

interface BookCardProps {
  thumbnail?: string | undefined;
  smallThumbnail?: string | undefined;
  title: string;
  author: string | string[];
  publisher: string;
  description: string;
  publishedDate: string;
  pageCount: string;
}

const BookCard = ({
  title,
  author,
  thumbnail,
  publisher,
  description,
  publishedDate,
  pageCount,
  smallThumbnail,
}: BookCardProps) => {
  const [isModalOpen, setModalOpen] = useState<Boolean>(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Card
        title={title}
        author={author}
        thumbnail={thumbnail}
        openModal={openModal}
      />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <BookContent
          title={title}
          author={author}
          publisher={publisher}
          description={description}
          publishedDate={publishedDate}
          pageCount={pageCount}
          smallThumbnail={smallThumbnail}
        />
      </Modal>
    </>
  );
};

export default BookCard;
