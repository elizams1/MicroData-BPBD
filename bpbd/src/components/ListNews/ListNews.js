import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './ListNews.css';
import { Pagination } from 'react-bootstrap';
import { Spinner } from '@chakra-ui/react';
import { Link } from "react-router-dom";


function ListNews(){

  //http://adminmesuji.embuncode.com/api/news?instansi_id=15&sort_type=asc
  const [Items, setItems] = useState([]);
  const [NewsData, setNewsData] = useState([]);
  const [CategoryNewsData, setCategoryNewsData] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
      setloading(true);
      setNewsByCategory(null);
      axios
        .get("http://adminmesuji.embuncode.com/api/news?instansi_id=31")
        .then(function (news) {
          setNewsData(news.data.data.data);
          console.log("console header: " + news.data.data.data);
          setloading(false);
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

      axios
        .get("http://adminmesuji.embuncode.com/api/news/categories/31")
        .then(function (catNews) {
          setCategoryNewsData(catNews.data.data);
          console.log("console header: " + catNews.data.data);
          setloading(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);

  const [NewsByCategory, setNewsByCategory] = useState([])
  function getNewsByCategory(category) {
    axios
      .get("http://adminmesuji.embuncode.com/api/news?instansi_id=31&slug="+ category)
      .then(function (news) {
        setNewsByCategory(news.data.data.data);
        console.log("console header: " + news.data.data.data);
        setloading(false);
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
    
  }
    console.log(NewsData)
    console.log(CategoryNewsData)
  return(
    <div>
      <div>
        <p className="newsTitle">BERITA</p>
      </div>
      <div className="listNews">
        <div className="split-view-list-news">
          <div className="left-view-list-news">
            <div className='the-news'>
              { loading ?
                <div className="loading">
                  <Spinner size='lg' color="#075098" />
                  <p>Loading</p>
                </div>
                :(

                <>
                {NewsData != null && NewsByCategory == null ?
                    NewsData.map(item =>
                    <Link to={{ 
                      pathname:'/news/' + item.id
                    }} className="detailNews">
                      <div >
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
                  ) :
                    NewsByCategory.map(item =>
                    <Link to={{ 
                      pathname:'/news/' + item.id
                    }} className="detailNews">
                      <div >
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
                }
                </>
                )
              }
              
            </div>
            <div className="pagination">
              <Pagination>{Items}</Pagination>
            </div>
          </div>
          <div className="rightView">
            <div className="categoryNews">
              <>
              { loading ?
              (
                <div className="loading">
                  <Spinner size='lg' color="#075098" />
                  <p>Loading</p>
                </div>
              ) :
                <div className="box-category">
                  <p className="categoryName">Kategori Berita</p>
                  {CategoryNewsData.map(item => 
                    <button onClick={()=>{
                    getNewsByCategory(item.slug) 
                    setNewsData(null)}}>
                      <p className="textCategory ">{item.nama_kategori}</p>
                      <hr className="the-line"></hr> 
                    </button> 
                  ) 
                  }
                </div>
              }
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ListNews;