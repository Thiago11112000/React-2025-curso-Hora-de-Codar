import './App.css';
import { useState } from 'react';
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);
  const { data: items, httpConfig, loading } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = { name, price };

    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  return (
    <div className="App">
      <h1>Lista de produtos</h1>

      {/* 6 - Loading */}
      {loading && <p>Carregando dados...</p>}

      {!loading && (
        <>
          {items && items.length > 0 ? (
            <ul>
              {items.map((product) => (
                <li key={product.id}>
                  {product.name} - R$ {product.price}
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhum produto encontrado.</p>
          )}
        </>
      )}

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
          {/* 7 -State de loading no post  */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;