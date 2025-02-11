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
        <input type="submit" value="Enviar" />
        </form> 
    </div>
  )
}

export default Myform