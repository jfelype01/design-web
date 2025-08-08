import React from "react";
import { Link } from "react-router-dom";
import "../styles/LivroCard.css";

export default function LivroCard({ livro }) {
  return (
    <Link to={`/livro/${livro.id}`} className="bookCard">
      <img src={livro.capa} alt={livro.titulo} className="bookCover" />

      <div className="bookInfo">
        <p className="bookTitle">{livro.titulo}</p>
        <p className="bookAuthor">{livro.autor}</p>
      </div>
    </Link>
  );
}