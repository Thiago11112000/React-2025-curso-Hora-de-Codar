import './MyForm.css'

const Myform = () => {
  return (
    <div>
       {/*Criação de Form */}
       <form>
        <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name"  placeholder="Digite o seu nome"/>
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