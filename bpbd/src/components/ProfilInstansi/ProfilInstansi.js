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
        <div className="split-view-profil">
          <div className="left-view-profil">
            <div className="profil-top">
              <p className="profil-title">PROFIL INSTANSI</p>
              <img className="img-profil" src={ProfilData.logo_instansi}/>
            </div>
            <div className="profil-middle">
              <p className="profil-name">{ProfilData.nama_instansi}</p>
              <p className="profil-about">{ProfilData.tentang}</p>
            </div>
            <div className="profil-structure">
              <p className="profil-title">STRUKTUR ORGANISASI</p>
              <div className="the-structure">
                <div className="photo-structure">
                  <img src={ProfilData.foto_kepala} alt="foto-kepala" className="photo-profil"/>
                  <p className="structure-name">{ProfilData.nama_kepala}</p>
                </div>
                <div className="photo-structure">
                  <img src={ProfilData.foto_wakil_kepala} className="photo-profil" />
                  <p className="structure-name">{ProfilData.nama_wakil_kepala}</p>
                </div>
                <div className="photo-structure">
                  <img src={ProfilData.foto_sekretaris} className="photo-profil"/>
                  <p className="structure-name">{ProfilData.nama_sekretaris}</p>
                </div>
              </div>
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