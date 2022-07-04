import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CategoryNews from '../CategoryNews/CategoryNews.js';
import CategoryArticle from '../CategoryArticle/CategoryArticle.js';
import './ListArticle.css';
import { Pagination } from 'react-bootstrap';
import { Spinner } from '@chakra-ui/react';
import { Link } from "react-router-dom";

function ListArticle() {
  const [Items, setItems] = useState([]);
  const [ArticleData, setArticleData] = useState([]);
  useEffect(() => {
      axios
        .get("http://adminmesuji.embuncode.com/api/article?instansi_id=31")
        .then(function (article) {
          setArticleData(article.data.data.data);
          console.log("console header: " + article.data.data.data);
          let items = []; 
          for (let number = 1; number<=article.data.data.last_page; number++){
            items.push(
              <Pagination.Item key={number} active={number === article.data.data.current_page}>
              {number}
            </Pagination.Item>,
            );
            setItems(items);
          }
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
        
        <div className="split-view-list-article">
          <div className="left-view-list-article">
            <div className='the-article'>
              { ArticleData!=null ? 
                ArticleData.map(item => 
                <Link to={{ 
                  pathname:'/article/' + item.id
                 }} className="detailNews">
                  <div>
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
                </Link>
                                
              )
              :
                <>
                  <Spinner size='xl' />
                  <p>Loading</p>
                </>
              }
            </div>
            <div className="pagination">
              <Pagination>{Items}</Pagination>
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