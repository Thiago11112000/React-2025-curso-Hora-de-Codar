import './App.css';
import { useEffect, useState } from 'react';
const url = "http://localhost:3000/products";

function App() {
  // Initialize state to hold our product data
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  useEffect(() => {
    // Define our async function to fetch data
    async function fetchData() {
      try {
        const res = await fetch(url);
        // Check if the response is ok before proceeding
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        // You might want to set an error state here to show to the user
      }
    }

    fetchData();
  }, []); // Properly closed dependency array
  
  // 2 - add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product ={
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

    //3 - Carregamento dinâmico
    const addedProduct = await res.json();
      setProducts((prevProducts) => [...prevProducts, product]);
      setName("");
      setPrice("");
  }
  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
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
            <label>
              Preço:
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
          </label>
          <input type="submit" value="criar" />
        </form>
      </div>
    </div>
  );
}

export default App;