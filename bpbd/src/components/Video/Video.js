import React from 'react';
import axios from 'axios';
import CategoryNews from '../CategoryNews/CategoryNews.js';
import CategoryArticle from '../CategoryArticle/CategoryArticle.js';
import './Video.css';

function Video(){

  return( 
    <>
      <div className="video-page">
        <div className="split-view-video">
          <div className="left-view-video">
            <p className="video-title">VIDEO</p>
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