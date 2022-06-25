import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CategoryNews from '../CategoryNews/CategoryNews.js';
import CategoryArticle from '../CategoryArticle/CategoryArticle.js';
import './ListArticle.css';

function ListArticle() {
  //http://adminmesuji.embuncode.com/api/article?instansi_id=4&sort_type=asc&sort_by=created_at

  const [ArticleData, setArticleData] = useState([]);
  useEffect(() => {
      axios
        .get("http://adminmesuji.embuncode.com/api/article?instansi_id=4&sort_type=asc&sort_by=created_at")
        .then(function (article) {
          setArticleData(article.data.data.data);
          console.log("console header: " + article.data.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);

  return (
    <div>
      <div>
        <p className="articleTitle">ARTIKEL</p>
      </div>
      <div className="listArticle">
        
        <div className="splitView">
          <div className="leftView">
            <div className='theNews'>
              {ArticleData.map(item => 
                <div className="detailNews">
                  <img
                    className="thePicture"
                    src={item.image_file_data}
                    alt="First slide"
                  />
                  <div className="detail">
                    <p className="textDetails">{item.title}</p>
                    <p className="textIntro">{item.intro}</p>
                  </div>
                </div>                
              )}
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
    </div>
    
  );
}

export default ListArticle;