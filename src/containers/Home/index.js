import React, {useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Container, Image, ContainerItens, H1, InputLabel, Input, Button,} from "./styles"

import CodeBurguer from "../../Assets/codeburguer.svg"



function App() {
  const [users, setusers] = useState([]);
  const navigate = useNavigate();
  
  const inputName = useRef();
  const inputAge = useRef();


  async function addNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value
    });
    
    
    setusers([...users, newUser,])
    
    
    navigate("/usuarios");
  
  }

 
  return(<Container>
     <Image alt="Logo-imagem" src={CodeBurguer}/>

     <ContainerItens>
     <H1>Faça seu pedido!</H1>

     <InputLabel>Pedido</InputLabel>
     <Input placeholder='1 Coca-Cola, 1-X Salada'></Input>

     <InputLabel>Nome do Cliente</InputLabel>
     <Input placeholder='Nome'></Input>

     <Button onClick={addNewUser}> Novo Pedido</Button>
     </ContainerItens>

     </Container>
  )
}

export default App 