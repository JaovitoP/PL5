import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
    <div className="logo-container">
      <img src="src/assets/logo.png"/>
    </div>
      <Navbar />
      <h1 className="text-center">Seja bem-vindo ao PetLovers!</h1>
      <h2 className="text-center">Na aba 'Serviços', você conseguirá listar, cadastrar, editar e excluir os Clientes, Pets, Produtos e Serviços.</h2>
    </>
  );
}

export default App;
