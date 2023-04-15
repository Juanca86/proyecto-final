import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doRegister } from "../../store/auth/action";
import { Button, Container, Form, FormGroup, FormLabel } from "react-bootstrap";
import { Navigate } from "react-router-dom";

const RegisterComponent = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { user } = useSelector((state) => state.AuthReducer);
 

  const dispatch = useDispatch();

  function userRegister() {
    dispatch(
      doRegister({ username: username, email: email, password: password })
    );
    setUsername("");
    setEmail("");
    setPassword("");
  }

//   if (user.username && user.id) {
//     return <Navigate to="/profile" replace />;
//   }

  return (
    <Container>
      <Form>
        <FormGroup>
          <FormLabel>Nombre de usuario</FormLabel>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
            type="username"
          ></input>
        </FormGroup>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            type="email"
          ></input>
        </FormGroup>
        <FormGroup>
          <FormLabel>Password</FormLabel>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            type="password"
          ></input>
        </FormGroup>
        <Button onClick={userRegister}>Registrar</Button>
      </Form>
    </Container>
  );
};

export default RegisterComponent;
