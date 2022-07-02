import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CategoryNews from '../CategoryNews/CategoryNews.js';
import CategoryArticle from '../CategoryArticle/CategoryArticle.js';
import './ListNews.css';
import { Pagination } from 'react-bootstrap';
import { Link } from "react-router-dom";

function ListNews(){
  //http://adminmesuji.embuncode.com/api/news?instansi_id=15&sort_type=asc
  const [Items, setItems] = useState([]);
  const [NewsData, setNewsData] = useState([]);
  useEffect(() => {
      axios
        .get("http://adminmesuji.embuncode.com/api/news?instansi_id=31")
        .then(function (news) {
          setNewsData(news.data.data.data);
          console.log("console header: " + news.data.data.data);
          let items = []; 
          for (let number = 1; number<=news.data.data.last_page; number++){
            items.push(
              <Pagination.Item key={number} active={number === news.data.data.current_page}>
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

  return(
    <div>
      <div>
        <p className="newsTitle">BERITA</p>
      </div>
      <div className="listNews">
        <div className="split-view-list-news">
          <div className="left-view-list-news">
            <div className='the-news'>
              {NewsData.map(item =>
                <Link to={{ 
                  pathname:'/news/' + item.id
                 }}>
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
                </Link> 
                              
              )}
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
export default ListNews;