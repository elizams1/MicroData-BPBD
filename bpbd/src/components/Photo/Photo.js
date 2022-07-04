import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CategoryNews from '../CategoryNews/CategoryNews.js';
import CategoryArticle from '../CategoryArticle/CategoryArticle.js';
import './Photo.css';
import { Spinner } from '@chakra-ui/react';

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
  
  return( 
    <>
    {
      PhotoData!= null ? 
      <div className="photo-page">
        <div className="split-view-photo">
          <div className="left-view-photo">
            <p className="photo-title">GALERI FOTO</p>
            <div className="the-gallery">
            {
              PhotoData.map(item =>
              <div className="the-sub-gallery">
                {
                  item.image_gallery_item.map(items =>
                    <div className="the-photo">
                      <img src={items.image_file_data} alt="galeri" className="the-img"/>
                      <p className="the-desc">{items.description}</p>
                    </div>
                  )
                }
              </div>
              )
            } 
            </div>
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
      :
      <>
        <Spinner size='xl' />
        <p>Loading</p>
      </>
    }
      
    </>
  );
}

export default Photo;
