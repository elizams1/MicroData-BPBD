import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CategoryNews from '../CategoryNews/CategoryNews.js';
import CategoryArticle from '../CategoryArticle/CategoryArticle.js';
import './ProfileInstansi.css';

function ProfilInstansi() {

  const [ProfilData, setProfilData] = useState([]);
  useEffect(() => {
      axios
        .get("http://adminmesuji.embuncode.com/api/instansi/detail/31")
        .then(function (profil) {
          setProfilData(profil.data.data);
          console.log("console header: " + profil.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);

  return(
    <>
      <div className="profil-instansi">
        <div className="split-view-detail">
          <div className="left-view-detail">
            <div>
              <p>PROFIL INSTANSI</p>
            </div>
            <div>
              <img src={ProfilData.logo_instansi}/>
              <p>{ProfilData.nama_instansi}</p>
              <p>{ProfilData.tentang}</p>
            </div>
            <div>
              <p>{ProfilData.nama_kepala}</p>
              <img src={ProfilData.foto_kepala} alt="foto-kepala"/>
            </div>
            
            

          </div>
          <div className="rightView">
            <div className="categoryNews">
              <CategoryNews/>
            </div>
            <div className="categoryArticle">
              <CategoryArticle/>
            </div>
          </div> 
        </div>
      </div>
    </>
  );
}

export default ProfilInstansi;