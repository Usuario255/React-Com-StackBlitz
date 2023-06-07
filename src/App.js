import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
//Componente
import Home from './components/views/home.jsx';
// Style
import './style.css';

export default function App() {
  return (
    <div>
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    </div>
  );
}
