import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalogo from "./pages/Catalogo";
import DetalhesLivro from "./pages/DetalhesLivro";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Catalogo />} />
        <Route path="/livro/:id" element={<DetalhesLivro />} />
      </Routes>
    </Router>
  );
}
