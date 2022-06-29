import React from "react";
import './App.css';
import Menu from './components/Menu/Menu.js';
import Footer from './components/Footer/Footer.js';
import Home from './components/Home/Home.js';
import ListNews from './components/ListNews/ListNews.js';
import ListArticle from './components/ListArticle/ListArticle.js';
import DetailArticle from './components/DetailArticle/DetailArticle.js';
import DetailNews from './components/DetailNews/DetailNews.js';
import ProfilInstansi from './components/ProfilInstansi/ProfilInstansi.js';
import Video from './components/Video/Video.js';
import Photo from './components/Photo/Photo.js';
import { ChakraProvider } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <Menu/>
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        {/* <Route path="/" element={<ListArticle/>} /> */}
        {/* <Route path="/" element={<ListNews/>} /> */}
        {/* <Route path="/" element={<DetailArticle/>}/> */}
        {/* <Route path="/" element={<DetailNews/>}/> */}
        {/* <Route path="/" element={<ProfilInstansi/>}/> */}
        {/* <Route path="/" element={<Video/>}/> */}
        {/* <Route path="/" element={<Photo/>}/> */}
        
      </Routes>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
