import React, { useState } from "react";
import { livros } from "../data/book";
import LivroCard from "../components/LivroCard";
import Filtros from "../components/Filter";
import "../styles/Catalogo.css";

export default function Catalogo() {
  const [autorFiltro, setAutorFiltro] = useState("");
  const [generoFiltro, setGeneroFiltro] = useState("");

  const livrosFiltrados = livros.filter((livro) => {
    return (
      (autorFiltro === "" || livro.autor === autorFiltro) &&
      (generoFiltro === "" || livro.genero === generoFiltro)
    );
  });

  const autores = [...new Set(livros.map(l => l.autor))];
  const generos = [...new Set(livros.map(l => l.genero))];

  return (
    <div className="geral">
      <div className="banner">
        <h1 className="headLine">Catálogo de Livros</h1>
      </div>

      <div className="filter">
        <Filtros {...{ autorFiltro, generoFiltro, setAutorFiltro, setGeneroFiltro, autores, generos }} />
      </div>

      <div className="catalogo">
        {livrosFiltrados.map(livro => <LivroCard key={livro.id} livro={livro} />)}
      </div>
      
    </div>
  );
}
