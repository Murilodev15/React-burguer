import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Container, Image, ContainerItens, H1, Button, User } from "./styles"

import CodeBurguer from "../../Assets/burger.svg"
import Trash from "../../Assets/trash.svg"


function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();




  useEffect(() => {

    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");


      setUsers(newUsers);
    }
    fetchUsers();
  }, []);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter((user) => user.id !== userId)

    setUsers(newUsers)
  }

  function goBackpage() {
    navigate("/");
  }



  return (<Container>
    <Image alt="Logo-imagem" src={CodeBurguer} />

    <ContainerItens>
      <H1>Pedidos</H1>

      <ul>
        {users.map((user) => (
          <User key={user.id}>

           <div> <p>{user.age}</p> <p1>{user.name}</p1></div>

              <button onClick={() => deleteUser(user.id)}> <img src={Trash} alt='lata-de-lixo' />

              </button>
            
           
          </User>
        ))}
      </ul>





      <Button onClick={goBackpage}> Voltar </Button>
    </ContainerItens>

  </Container >
  );
}

export default Users;