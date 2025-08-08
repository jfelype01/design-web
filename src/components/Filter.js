import React from "react";
import '../styles/Filter.css';

export default function Filtros({ autorFiltro, generoFiltro, setAutorFiltro, setGeneroFiltro, autores, generos }) {
  return (
    <div className="filterContainer">
      <select value={autorFiltro} onChange={e => setAutorFiltro(e.target.value)} className="authorFilter">
        <option value="">Todos os Autores</option>
        {autores.map(a => <option key={a} value={a}>{a}</option>)}
      </select>

      <select value={generoFiltro} onChange={e => setGeneroFiltro(e.target.value)} className="genreFilter">
        <option value="">Todos os Gêneros</option>
        {generos.map(g => <option key={g} value={g}>{g}</option>)}
      </select>
    </div>
  );
}