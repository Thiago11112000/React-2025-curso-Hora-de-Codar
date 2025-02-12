import { useState } from 'react'
import './MyForm.css'

const Myform = () => {
    const [name,setName] = useState()
    const[email,setEmail] = useState()

    const handleName = (e) =>{
        setName(e.target.value)
    }
    console.log(name);
    console.log(email)

    const handleSubmit = (event) =>{
      event.preventDefault();
      console.log("Enviando o formulário")
      console.log(name,email)
    }
  return (
    <div>
      {/*5 - envio de form /*}
       {/*1 - Criação de Form */}
       <form onSubmit={handleSubmit}> 
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
            {/*4 - Simplificação de manipulação do state */}
            <input type="email" name= "email" placeholder='Digite o seu e-mail' 
            onChange={(e)=> setEmail(e.target.value)}  />
        </label>

        <input type="submit" value="Enviar" />
        </form> 
    </div>
  )
}

export default Myform