import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import { Spinner } from '@chakra-ui/react';
import './DetailNews.css';

function DetailNews() {
  const {id} = useParams()
  const [loading, setloading] = useState(false);
  //Mendapatkan detail news dari id news
  const [NewsDetail, setNewsDetail] = useState([]);
  useEffect(() => {
      axios
        .get("http://adminmesuji.embuncode.com/api/news/" + id)
        .then(function (news) {
          setNewsDetail(news.data.data);
          console.log("console header: " + news.data.data);
          setloading(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);

  return (
    <>
      <div className="detail-news">
        <div className="split-view-detail">
          {loading ?
            (
              <div className="loading">
                <Spinner size='lg' color="#075098" />
                <p>Loading</p>
              </div>
            ) :
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
          }
        </div>
      </div>
    </>
  );
}

export default DetailNews;