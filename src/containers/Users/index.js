//REACT HOOKS

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";

import H1 from "../../components/Title";
import ContainerItems from "../../components/Containeritens";
import Button from "../../components/Button";

import { Container, Image, User } from "./styles";

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
    await axios.delete(`http://localhost:3001/users/${userId}`);

    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }

  function goBackPage() {
    navigate("/");
  }

  return (
    <Container>
      <Image alt="logo-image" src={Avatar} />
      <ContainerItems isBlur={true}>
        <H1>Usuários</H1>

        <div>
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
        </div>
        <Button isBack={true} onClick={goBackPage}>
          <img alt="seta" src={Arrow} />
          Voltar
        </Button>
      </ContainerItems>
    </Container>
  );
} //consigo colocar js dentro do html, basta colocar {}

export default Users;
