import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CategoryNews from '../CategoryNews/CategoryNews.js';
import CategoryArticle from '../CategoryArticle/CategoryArticle.js';
import './Photo.css';

function Photo(){

  const [PhotoData, setPhotoData] = useState([]);
  useEffect(() => {
      axios
        .get("http://adminmesuji.embuncode.com/api/image-gallery?instansi_id=8")
        .then(function (photo) {
          setPhotoData(photo.data.data.data);
          console.log("console header: " + photo.data.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);
  
  console.log(PhotoData);
  return( 
    <>
      <div className="photo-page">
        <div className="split-view-photo">
          <div className="left-view-photo">
            <p className="photo-title">FOTO</p>
            
          </div>
          <div className="right-view-photo">
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

export default Photo;
