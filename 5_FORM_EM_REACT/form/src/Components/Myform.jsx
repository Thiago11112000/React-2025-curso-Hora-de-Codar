import { useState } from 'react'
import './MyForm.css'

const Myform = () => {
    const [name,setName] = useState()
    const[email,setEmail] = useState()

    const handleName = (e) =>{
        setName(e.target.value)
    }
    console.log(name);
  return (
    <div>
       {/*Criação de Form */}
       <form>
        <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" 
            name="name" 
             placeholder="Digite o seu nome"
             onChange={handleName}/>
        </div>
        {/*2 Label envolvendo Input*/}
        <label>
            <span>E-mail</span>
            <input type="email" name= "email" placeholder='Digite o seu e-mail'  />
        </label>

        <input type="submit" value="Enviar" />
        </form> 
    </div>
  )
}

export default Myform