//REACT HOOKS

import React, { useState, useRef } from "react";

import axios from "axios";

import People from "./assets/people.svg";
import Arrow from "./assets/arrow.svg";
import Trash from "./assets/trash.svg";

import {
  Container,
  H1,
  Image,
  ContainerItems,
  InputLabel,
  Input,
  Button,
  User,
} from "./styles";

//JSX -> MISTURA JS COM HTML
function App() {
  const [users, setUsers] = useState([]); //Estado no React
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    //const { data: newUser } = await axios.post("http://localhost:3001/users", {
    //   name: inputName.current.value,
    //   age: inputAge.current.value,
    // });

    // setUsers([...users, newUser]);

    const { data: newUsers } = await axios.get("http://localhost:3001/users");
    setUsers(newUsers);
  }

  function deleteUser(userId) {
    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }

  return (
    <Container>
      <Image alt="logo-image" src={People} />
      <ContainerItems>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar
          <img alt="seta" src={Arrow} />
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p> {user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lixeira" />
              </button>
            </User>
          ))}
        </ul>
      </ContainerItems>
    </Container>
  );
} //consigo colocar js dentro do html, basta colocar {}

export default App;
