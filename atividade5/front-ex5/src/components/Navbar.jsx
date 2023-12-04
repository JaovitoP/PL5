import React from "react";
import { Link } from "react-router-dom";

const handleSelectOption = (event) => {
  const selectedOption = event.target.value;
  if (selectedOption !== "") {
    window.location.href = selectedOption;
  }
};

export const Navbar = () => {
  return (
    <nav className="bg-orange-400 flex justify-around">
      <div className="p-2 text-white hover:text-gray-200">
        <Link to="/">Voltar à tela Inicial</Link>
      </div>
      <div className="p-2 text-white hover:text-gray-200">
        <select className="text-white bg-orange-400 hover:text-gray-200" onChange={handleSelectOption}>
          <option value="">Aba de Serviços</option>
          <option value="/clientes">Clientes</option>
          <option value="/produtos">Produtos</option>
          <option value="/servicos">Serviços</option>
          <option value="/pets">Pets</option>
          <option value="/compras">Comprar</option>
          <option value="/compras">Atribuição de Pet</option>
        </select>
      </div>
      <div className="p-2 text-white hover:text-gray-200">
        <Link to="/listar">Históricos</Link>
      </div>
    </nav>
  );
};
