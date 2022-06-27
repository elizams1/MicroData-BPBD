import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CategoryNews from '../CategoryNews/CategoryNews.js';
import CategoryArticle from '../CategoryArticle/CategoryArticle.js';
import './ListNews.css';

function ListNews(){
  //http://adminmesuji.embuncode.com/api/news?instansi_id=15&sort_type=asc

  const [NewsData, setNewsData] = useState([]);
  useEffect(() => {
      axios
        .get("http://adminmesuji.embuncode.com/api/news?instansi_id=15&sort_type=asc")
        .then(function (news) {
          setNewsData(news.data.data.data);
          console.log("console header: " + news.data.data.data);
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
        <div className="splitView">
          <div className="leftView">
            <div className='the-news'>
              {NewsData.map(item => 
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
export default ListNews;