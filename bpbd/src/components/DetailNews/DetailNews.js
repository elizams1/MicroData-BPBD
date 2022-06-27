import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CategoryNews from '../CategoryNews/CategoryNews.js';
import CategoryArticle from '../CategoryArticle/CategoryArticle.js';
import './DetailNews.css';

function DetailNews() {
  //Mendapatkan detail news dari id news
  const [NewsDetail, setNewsDetail] = useState([]);
  useEffect(() => {
      axios
        .get("http://adminmesuji.embuncode.com/api/news/3-musrenbang-rpjmd-kabupaten-lampung-timur-tahun-2021-2026")
        .then(function (news) {
          setNewsDetail(news.data.data);
          console.log("console header: " + news.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);

  return (
    <>
      <div className="detail-news">
        <div className="split-view-detail">
          <div className="left-view-detail">
            <div>
              <p className="detail-news-title">{NewsDetail.title}</p>
              <img 
              class="thePicture" 
              src={NewsDetail.image_file_data}
              alt="ArticlePhoto"/>
              <div dangerouslySetInnerHTML={{
                __html: NewsDetail.content,
                }} className="detail-content"
              />
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

export default DetailNews;