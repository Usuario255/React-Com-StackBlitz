import React from 'react';
import { Outlet } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
//Componente
import NavBar from './components/shared/nav-bar/nav-bar.jsx';
// Style
import './style.css';

export default function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <NavBar />
        <Outlet> </Outlet>
      </ChakraProvider>
    </div>
  );
}
