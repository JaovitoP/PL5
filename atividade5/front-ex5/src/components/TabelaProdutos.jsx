import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

export default function TabelaProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [produtosAtivos, setProdutosAtivos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/product/listar");
        const data = await response.json();
        console.log("Meus produtos", data);
        setProdutos(data);
      } catch (error) {
        console.error("Erro ao obter dados:", error);
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleRedirect = () => {
    return navigate("/cadastrarProduto");
  };

  useEffect(() => {
    if (produtos.length > 0) {
      const produtosAtivos = produtos.filter(
        (produto) => produto.status === true
      );
      setProdutosAtivos(produtosAtivos);
      console.log("Produtos Ativos:", produtosAtivos);
    }
  }, [produtos]);

  return (
    <div className="bg-yellow-100 w-screen h-screen">
      <div className="logo-container">
        <img src="src/assets/logo.png" />
      </div>
      <Navbar />
      
      <div className="table-responsive">
        <table className="mx-auto w-screen text-center">
          <thead className="bg-yellow-500">
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100 p-2">
            {produtosAtivos.length > 0 ? (
              produtosAtivos.map((produto) => (
                <tr key={produto.id_produto} className="border border-solid">
                  <td>{produto.id_produto}</td>
                  <td>{produto.nome}</td>
                  <td>{produto.descricao}</td>
                  <td>{produto.preco}</td>
                  <td>
                    <Link to={`/produtos/${produto.id_produto}`}>
                      Visualizar
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">Nenhum produto cadastrado.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <button
        className="w-screen text-black h-24 w-32"
        onClick={handleRedirect}
      >
        Cadastrar Produto
      </button>
    </div>
  );
}
