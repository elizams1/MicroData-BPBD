import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CategoryNews from '../CategoryNews/CategoryNews.js';
import CategoryArticle from '../CategoryArticle/CategoryArticle.js';
import './VisiMisi.css';

function VisiMisi() {
  const [VisiMisiData, setVisiMisiData] =useState([]);
  useEffect(() => {
    axios
      .get("http://adminmesuji.embuncode.com/api/static-page/15_visiMisi")
      .then(function (visiMisi) {
        setVisiMisiData(visiMisi.data.data);
        console.log("console header: " + visiMisi.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return(
    <>
      <div className="visiMisi-page">
        <div className="split-view-visiMisi">
          <div className="left-view-visiMisi">
            <p className="visiMisi-title">VISI MISI</p>
            <div dangerouslySetInnerHTML={{
              __html: VisiMisiData.content,
              }} className="visiMisi-content"
            />
          </div>
          <div className="right-view-visiMisi">
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

export default VisiMisi;