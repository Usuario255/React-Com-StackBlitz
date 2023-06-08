import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
//Componente
import Home from './components/views/home.jsx';
import NavBar from './components/shared/nav-bar/nav-bar.jsx';
// Style
import './style.css';

export default function App() {
  return (
    <div>
      <ChakraProvider>
        <NavBar/>
        <Home />
      </ChakraProvider>
    </div>
  );
}
