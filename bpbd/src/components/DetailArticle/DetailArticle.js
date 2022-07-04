import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CategoryNews from '../CategoryNews/CategoryNews.js';
import CategoryArticle from '../CategoryArticle/CategoryArticle.js';
import { useParams } from "react-router";
import { Spinner } from '@chakra-ui/react';
import './DetailArticle.css';

function DetailArticle(){
  const {id} = useParams()
   //Mendapatkan detail article dari id artikel
  const [ArticleDetail, setArticleDetail] = useState([]);
  useEffect(() => {
      axios
        .get("http://adminmesuji.embuncode.com/api/article/" + id)
        .then(function (article) {
          setArticleDetail(article.data.data);
          console.log("console header: " + article.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);

  return(
    <>
      <div className="detailArtikel">
        <div className="split-view-detail">
          <div className="left-view-detail">
            { ArticleDetail!=null ?
              <div>
                <p className="detail-article-title">{ArticleDetail.title}</p>
                <img 
                class="thePicture" 
                src={ArticleDetail.image_file_data}
                alt="ArticlePhoto"/>
                <div dangerouslySetInnerHTML={{
                  __html: ArticleDetail.content,
                  }} className="detail-content"
                />
              </div>
              :
              <div className="loading">
                <Spinner size='lg' color="#075098" />
                <p>Loading</p>
              </div>
            }
            
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

export default DetailArticle;