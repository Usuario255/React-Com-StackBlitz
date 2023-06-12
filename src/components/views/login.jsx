import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  Checkbox,
} from '@chakra-ui/react';

import '../styles/login.css';

const Login = () => {
  return (
    <>
      <Card className="login">
        <CardBody className="form-login">
          <FormControl>
            <FormLabel>E-mail</FormLabel>
            <Input type="email" placeholder="Digite seu endereço de e-mail" />
            <FormLabel className="senha-label">Senha</FormLabel>
            <Input type="email" placeholder="Digite sua senha" />
          </FormControl>
          <Checkbox defaultChecked>Manter login</Checkbox>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </>
  );
};

export default Login;
