import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Menu.css';
import { BsList } from "react-icons/bs";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'

function Menu(){
  // Mengambil data menu berdasarkan id instansi
  const [MenuData, setMenuData] = useState([]);
  useEffect(() => {
      axios
        .get("http://adminmesuji.embuncode.com/api/menus?instansi_id=31")
        .then(function (menu) {
          setMenuData(menu.data);
          console.log("console header: " + menu.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);

  // Mengambil data detail instansi menggunakan id instansi
  const [LogoData, setLogoData] = useState([]);
  useEffect(() => {
      axios
        .get("http://adminmesuji.embuncode.com/api/instansi/detail/31")
        .then(function (logo) {
          setLogoData(logo.data.data);
          console.log("console header: " + logo.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);

  // membuat drawer
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  

  return(
    <div className="theMenu">
      {MenuData.map(item => <div className="button" >{item.name}</div> )}
      <div className="drawer">
        <div className="theName">
          <img className="logoMenu" src={LogoData.logo_instansi} alt="thelogo" ></img>
          <p className="nameInstansi">{LogoData.nama_instansi}</p>
        </div>
        <div className="theDrawer">
          <div className="buttonDrawer" onClick={onOpen}>
            <BsList size={35} color="#fff" className="icon"/>
          </div>
          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth='1px' color= "#075098">Menu</DrawerHeader>              
              <DrawerBody>
                {MenuData.map(item => <div className="menuDrawer" >{item.name}</div> )}
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
        
      </div>
    </div>
  );
}

export default Menu;
