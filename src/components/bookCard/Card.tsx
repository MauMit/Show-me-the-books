import React from "react";
import defaultImage from "../../assets/noBook.jpg";

interface CardsProps {
  title: string;
  author: string | string[];
  thumbnail: string | undefined;
  openModal: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Card = ({ title, author, thumbnail, openModal }: CardsProps) => {
  return (
    <div className="card" onClick={openModal}>
      <img src={thumbnail || defaultImage} alt="title" className="image" />
      <h3>{title}</h3>
      <h4>{author}</h4>
    </div>
  );
};

export default Card;
