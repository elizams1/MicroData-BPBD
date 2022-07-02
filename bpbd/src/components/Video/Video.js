import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CategoryNews from '../CategoryNews/CategoryNews.js';
import CategoryArticle from '../CategoryArticle/CategoryArticle.js';
import './Video.css';

function Video(){
  
  const [VideoData, setVideoData] = useState([]);
  useEffect(() => {
      axios
        .get("http://adminmesuji.embuncode.com/api/video-gallery?instansi_id=31")
        .then(function (video) {
          setVideoData(video.data.data.data);
          console.log("console header: " + video.data.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);

  return( 
    <>
      <div className="video-page">
        <div className="split-view-video">
          <div className="left-view-video">
            <p className="video-title">GALERI VIDEO</p>
            <div className="the-gallery">
            {
              VideoData.map(item =>
              <div className="the-sub-gallery">
                {
                  item.image_gallery_item.map(items =>
                    <div className="the-photo">
                      <iframe src={'https://www.youtube.com/embed/'+items.video_url} alt="thevideo" className="the-img" allowFullScreen/>
                      <p className="the-desc">{items.description}</p>
                    </div>
                  )
                }
              </div>
              )
            } 
            </div>
          </div>
          <div className="right-view-video">
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

export default Video;