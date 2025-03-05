import './App.css';
import { useState } from 'react';
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products";

function App() {
  // Inicializa o estado para armazenar os dados dos produtos
  const [products, setProducts] = useState([]);
  
  // Usando o hook useFetch para pegar os produtos da API
  const { data: items, httpConfig } = useFetch(url); // Desestruturação de 'data' como 'items'
  console.log(items); 

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 2 - Adiciona produtos
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    const product = {
      name,
      price
    }

    // Comentado: método antigo usando fetch diretamente
    // const res = await fetch(url, {
    //   method: "POST", // Método POST para adicionar o produto
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product), // Corpo com os dados do produto em formato JSON
    // });

    // // 3 - Carregamento dinâmico
    // const addedProduct = await res.json(); // Converte a resposta da API em um objeto JSON
    // setProducts((prevProducts) => [...prevProducts, addedProduct]); // Atualiza a lista de produtos

    // 5 - Refatorando para usar o httpConfig do useFetch
    httpConfig(product, "POST"); // Usando o hook httpConfig para configurar o POST

    setName(""); // Limpa o campo de nome
    setPrice(""); // Limpa o campo de preço
  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {items && items.length > 0 ? (
          items.map((product) => (
            <li key={product.id}>{product.name} - R$ {product.price}</li>
          ))
        ) : (
          <p>Nenhum produto encontrado.</p>
        )}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} // Atualiza o estado 'name'
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)} // Atualiza o estado 'price'
            />
          </label>
          <input type="submit" value="Criar" />
        </form>
      </div>
    </div>
  );
}

export default App;
