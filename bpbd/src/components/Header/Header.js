import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Header.css';
import { BsEnvelope, BsGeo } from "react-icons/bs";
import Menu from '../Menu/Menu.js';

function Header() {
  const [HeaderData, setHeaderData] = useState([]);
  useEffect(() => {
      axios
        .get("http://adminmesuji.embuncode.com/api/instansi/detail/31")
        .then(function (header) {
          setHeaderData(header.data.data);
          console.log("console header: " + header.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);

  return (
    <div className="header">
      <div className="menuHeader">
        <Menu/>
      </div>
      <div className="columnHeader">
        <div className="logo">
          <img className="logoImg" src={HeaderData.logo_instansi} alt="thelogo"></img>
        </div>
        <div> 
          <p  className="name">{HeaderData.nama_instansi}</p>
        </div>
        <div className="description">
          <div className="email">
            <div className="icon">
              <BsEnvelope size={35} className="icon"/>
            </div>
            <div>
              <p className="details1">Email</p>
              <p className="details">{HeaderData.email}</p>
            </div>
          </div>
          <div className="location">
            <div className="icon">
              <BsGeo size={35} className="icon"/>
            </div>
            <div>
              <p className="details1">Alamat</p>
              <p className="details">{HeaderData.alamat}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    
  );
}

export default Header;
