import React from "react";
import { useParams, Link } from "react-router-dom";
import { livros } from "../data/book";
import "../styles/DetalhesLivro.css";
import "../styles/Catalogo.css";

import pagesIcon from '../imagens/pagesIcon.png';
import bookIcon from '../imagens/book.png';
import barCodeIcon from '../imagens/barCode.png';
import editoraIcon from '../imagens/editora.png';

export default function DetalhesLivro() {
  const { id } = useParams();
  const livro = livros.find(l => l.id === id);

  if (!livro) return <p className="p-4 text-white">Livro não encontrado.</p>;

  return (
    <div className="geral">
      <div className="cardDetalhado">
        <img src={livro.capa} alt={livro.titulo} className="Capa" />
        <div className="detalhesTexto">
          <h1 className="title">{livro.titulo}</h1>
          <p className="author">Autor: <span className="text-gray-300">{livro.autor}</span></p>
          <p className="gender">Gênero: <span className="text-gray-300">{livro.genero}</span></p>
          <p className="description">{livro.descricao}</p>
        </div>
      </div>
      <div className="listaInfos">
        <div className= "bookInfos">
          <img src={pagesIcon} alt={livro.titulo} className="CapaDetalhe" />
          <p className="info">Páginas: <span className="text-gray-300">{livro.paginas}</span></p>
        </div>
        <div className= "bookInfos">
          <img src={bookIcon} alt={livro.titulo} className="CapaDetalhe" />
          <p className="info">Acabamento: <span className="text-gray-300">{livro.acabamento}</span></p>
        </div>

        <div className= "bookInfos">
          <img src={barCodeIcon} alt={livro.titulo} className="CapaDetalhe" />
          <p className="info">ISBN: <span className="text-gray-300">{livro.isbn}</span></p>
        </div>

        <div className= "bookInfos">
          <img src={editoraIcon} alt={livro.titulo} className="CapaDetalhe" />
          <p className="info">Editora: <span className="text-gray-300">{livro.editora}</span></p>
        </div>
      </div>
      <Link to="/" className="textoVoltar">← Voltar</Link>
    </div>
  );
}
