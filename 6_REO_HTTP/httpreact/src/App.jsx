import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // Initialize state to hold our product data
  const [products, setProducts] = useState([]);
  const url = "http://localhost:3000/products";
  
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
    </div>
  );
}

export default App;