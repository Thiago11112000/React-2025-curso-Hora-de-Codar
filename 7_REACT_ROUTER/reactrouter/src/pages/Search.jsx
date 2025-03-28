import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
  const [searchParams] = useSearchParams();
  
  // Convertendo searchParams para string
  const queryString = searchParams.toString();
  const url = `http://localhost:3000/products?${queryString}`;

  const { data: items, loading, error } = useFetch(url);
  
  return (
    <div>
      <h1>Resultados disponíveis</h1>
      {error && <p>{error}</p>}
      {loading && <p>Carregando...</p>}
      <ul className="products">
        {items && items.map(item => (
          <li key={item.id}> 
            <h2>{item.name}</h2>
            <p>R$: {item.price}</p>
            <Link to={`/products/${item.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;