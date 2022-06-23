import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Home.css';
import { BsEnvelope, BsGeo } from "react-icons/bs";


function Home() {
  const [HomeData, setHomeData] = useState([]);
  useEffect(() => {
      axios
        .get("http://adminmesuji.embuncode.com/api/instansi/detail/31")
        .then(function (home) {
          setHomeData(home.data.data);
          console.log("console header: " + home.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);

  return (
    <div className="home">
      <div className="columnHome">
        <div className="logo">
          <img className="logoImg" src={HomeData.logo_instansi} alt="thelogo"></img>
        </div>
        <div> 
          <p  className="name">{HomeData.nama_instansi}</p>
        </div>
        <div className="description">
          <div className="email">
            <div className="icon">
              <BsEnvelope size={35} className="icon"/>
            </div>
            <div>
              <p className="details1">Email</p>
              <p className="details">{HomeData.email}</p>
            </div>
          </div>
          <div className="location">
            <div className="icon">
              <BsGeo size={35} className="icon"/>
            </div>
            <div>
              <p className="details1">Alamat</p>
              <p className="details">{HomeData.alamat}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    
  );
}

export default Home;
