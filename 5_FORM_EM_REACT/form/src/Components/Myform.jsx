import { useState } from 'react';
import './MyForm.css';

const Myform = ({ user }) => { // Desestruturação da prop user
  // 6 - controlled inputs
  // 3 - gerenciamento de dados
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [bio, setBio] = useState(""); 

  const handleName = (e) => {
    setName(e.target.value);
  };

  console.log(name);
  console.log(email);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando o formulário");
    console.log(name, email, bio);
    // 7 - limpar form
    setName("");
    setEmail("");
    setBio("");
  };

  return (
    <div>
      {/*5 - envio de form */}
      {/*1 - Criação de Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/*2 Label envolvendo Input*/}
        <label>
          <span>E-mail</span>
          {/*4 - Simplificação de manipulação do state */}
          <input
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <textarea
          name="bio"
          placeholder="Descrição do usuário"
          onChange={(e) => setBio(e.target.value)}
          value={bio}
        ></textarea>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Myform;
