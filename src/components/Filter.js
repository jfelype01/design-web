import React from "react";

export default function Filtros({ autorFiltro, generoFiltro, setAutorFiltro, setGeneroFiltro, autores, generos }) {
  return (
    <div className="mb-4 flex gap-4 text-white">
      <select value={autorFiltro} onChange={e => setAutorFiltro(e.target.value)} className="bg-gray-800 border border-gray-600 p-1 rounded">
        <option value="">Todos os Autores</option>
        {autores.map(a => <option key={a} value={a}>{a}</option>)}
      </select>

      <select value={generoFiltro} onChange={e => setGeneroFiltro(e.target.value)} className="bg-gray-800 border border-gray-600 p-1 rounded">
        <option value="">Todos os Gêneros</option>
        {generos.map(g => <option key={g} value={g}>{g}</option>)}
      </select>
    </div>
  );
}