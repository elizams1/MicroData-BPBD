import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Photo.css';
import { Spinner } from '@chakra-ui/react';

function Photo(){
  const [loading, setloading] = useState(false);
  const [PhotoData, setPhotoData] = useState([]);
  useEffect(() => {
    setloading(true);
    axios
      .get("http://adminmesuji.embuncode.com/api/image-gallery?instansi_id=8")
      .then(function (photo) {
        setPhotoData(photo.data.data.data);
        console.log("console header: " + photo.data.data.data);
        setloading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
    }, []);
  
  return( 
    <> 
      <div className="photo-page">
        <div className="photo-list">
          <p className="photo-title">GALERI FOTO</p>
          <div className="the-gallery">
          { loading ? 
            <>
              <Spinner size='xl' />
              <p>Loading</p>
            </>
            :
            <>
              {PhotoData.map(item =>
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
              )}
            </>
          } 
          </div>
        </div>
      </div>
    </>
  );
}

export default Photo;
