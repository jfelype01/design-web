import React from "react";
import { useParams, Link } from "react-router-dom";
import { livros } from "../data/book";

export default function DetalhesLivro() {
  const { id } = useParams();
  const livro = livros.find(l => l.id === id);

  if (!livro) return <p className="p-4 text-white">Livro não encontrado.</p>;

  return (
    <div className="p-4 bg-gray-900 min-h-screen text-white">
      <Link to="/" className="text-blue-400 underline">← Voltar</Link>
      <div className="mt-4 flex flex-col md:flex-row gap-4">
        <img src={livro.capa} alt={livro.titulo} className="w-64 h-auto rounded" />
        <div>
          <h1 className="text-3xl font-bold mb-2">{livro.titulo}</h1>
          <p className="text-lg">Autor: <span className="text-gray-300">{livro.autor}</span></p>
          <p className="text-lg">Gênero: <span className="text-gray-300">{livro.genero}</span></p>
          <p className="mt-4 text-gray-300">{livro.descricao}</p>
        </div>
      </div>
    </div>
  );
}
