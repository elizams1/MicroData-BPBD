import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Menu.css';
import { BsList } from "react-icons/bs";

function Menu(){
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

  return(
    <div className="theMenu">
      {MenuData.map(item => <div className="button" >{item.name}</div> )}
      <div className="drawer">
        <div>
          <p className="nameInstansi">Badan Penanggulangan Bencana Daerah</p>
          <p className="nameInstansi">Kabupaten Lampung Timur</p>
        </div>
        <BsList size={35} color="#fff" className="icon"/>
      </div>
    </div>
  );
}

export default Menu;
