import React from "react";
import './App.css';
import Menu from './components/Menu/Menu.js';
import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer.js';
import ListBerita from './components/ListBerita/ListBerita.js';
import ListArticle from './components/ListArticle/ListArticle.js';
import { ChakraProvider } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ChakraProvider>
      <Menu/>
      {/* <Home/> */}
      {/* <ListBerita/> */}
      <ListArticle/>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
