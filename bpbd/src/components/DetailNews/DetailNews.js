import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import './DetailNews.css';

function DetailNews() {
  const {id} = useParams()
  //Mendapatkan detail news dari id news
  const [NewsDetail, setNewsDetail] = useState([]);
  useEffect(() => {
      axios
        .get("http://adminmesuji.embuncode.com/api/news/" + id)
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
              alt="NewsPhoto"/>
              <div dangerouslySetInnerHTML={{
                __html: NewsDetail.content,
                }} className="detail-content"
              />
            </div>
          </div>
          <div className="rightView">
            
          </div> 
        </div>
      </div>
    </>
  );
}

export default DetailNews;