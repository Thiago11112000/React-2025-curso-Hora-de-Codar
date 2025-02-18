import './App.css';
import { useState } from 'react';
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products";

function App() {
  // Initialize state to hold our product data
  const [products, setProducts] = useState([]);
  const { data: items } = useFetch(url); // Desestruturação de 'data' como 'items'
  console.log(items); 

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 2 - Add products
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price
    }

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    // 3 - Carregamento dinâmico
    const addedProduct = await res.json();
    setProducts((prevProducts) => [...prevProducts, addedProduct]); // Adiciona o produto retornado do POST
    setName("");
    setPrice("");
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
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <input type="submit" value="Criar" />
        </form>
      </div>
    </div>
  );
}

export default App;
