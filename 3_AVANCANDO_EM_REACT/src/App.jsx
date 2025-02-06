import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import City from './assets/city.jpg';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';

function App() {
const name = "Joaquim";
const [userName] = useState("Maria");

const cars = [
  {id: 1, brand: "FERRARI",km: 0,   color: "Amarela", newCar: true},
  {id: 2, brand: "KIA",km: 34433,   color: "Branco", newCar: false},
  {id: 3, brand: "Renault",km: 234,  color: "Azul", newCar: false}

]
  return (
    <div className='App'>
      <h1>Avançando em React</h1>
      {/*Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/*Imagem em asset */}
    <img src={City} alt="Cidade" />

      <div>
       < ManageData/>
       <ListRender/>
       <ConditionalRender/>
       {/* props*/}
       <ShowUserName name={userName} />
       {/*destructuring*/}
       <CarDetails brand= "VW" km={100000} color= "azul"  newCar={false}/>
       {/*reaproveitando */}
       <CarDetails brand= "FORD" km={0} color= "Vermelha" newCar={true}/>
       <CarDetails brand= "FIAT" km={4500} color= "branco" newCar={false}/>
        {/*loop em array de cars */}
        {cars.map((car)=>(
          <CarDetails  brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
        ))}
        {/*Fragment*/}
        <Fragment propFragment="teste"/>
      </div>
</div>
  )
}

export default App
