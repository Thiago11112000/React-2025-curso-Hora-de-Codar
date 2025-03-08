import React from "react"
import { data, useParams} from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
const Product = () => {
  // 4 - rota dinâmica 
  const {id} = useParams()

  const url =  "http://localhost:3000/products/" + id

  const {data: product, loading,error} = useFetch(url)

  console.log(product)
  // 5 -  carregamento dado individual
  return (
    <>
    <p> Id do produto: {id}</p>
    {error &&  <p>Ocorreu um erro...</p>}
    {loading && <p>Carregando...</p>}
    {product && (
      <div>
        <h1>{product.name}</h1>
        <p>{product.price}</p>
      </div>
    )}
    </>
  )
}

export default Product