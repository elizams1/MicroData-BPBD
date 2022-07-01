import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Home.css';
import { BsEnvelope, BsGeo } from "react-icons/bs";
import Carousel from '../Carousel/Carousel.js';
import CategoryNews from '../CategoryNews/CategoryNews.js';
import CategoryArticle from '../CategoryArticle/CategoryArticle.js';
import { Spinner } from '@chakra-ui/react';
import { Link } from "react-router-dom";


function Home() {
  // Mengambil data instansi menggunakan id instansi
  const [HomeData, setHomeData] = useState([]);
  useEffect(() => {
      axios
        .get("http://adminmesuji.embuncode.com/api/instansi/detail/31")
        .then(function (home) {
          setHomeData(home.data.data);
          console.log("console header: " + home.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);

  //Mengambil berita terbaru menggunakan id instansi
  const [NewsData, setNewsData] = useState([]);
  useEffect(() => {
      axios
        .get("http://adminmesuji.embuncode.com/api/news?instansi_id=15&sort_type=asc&per_page=3")
        .then(function (news) {
          setNewsData(news.data.data.data);
          console.log("console header: " + news.data.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);
  
  //Mengambil berita terbaru menggunakan id instansi
  const [ArticleData, setArticleData] = useState([]);
  useEffect(() => {
      axios
        .get("http://adminmesuji.embuncode.com/api/article?instansi_id=4&per_page=3&sort_type=asc&sort_by=created_at")
        .then(function (article) {
          setArticleData(article.data.data.data);
          console.log("console header: " + article.data.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);

  //Mengambil foto terbaru menggunakan id instansi id
  const [PhotoData, setPhotoData] = useState([]);
  useEffect(() => {
      axios
        .get("http://adminmesuji.embuncode.com/api/image-gallery?instansi_id=15&per_page=3")
        .then(function (photo) {
          let theImage = [];
          for (let i = 0; i < photo.data.data.data.length; i++) {
            for (let j = 0; j < photo.data.data.data[i].image_gallery_item.length; j++) {
              theImage.push(photo.data.data.data[i].image_gallery_item[j].image_file_data)
            }
          }
          setPhotoData(theImage);
          console.log("console header: " + photo.data.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);

  return (
    <>
      {
        HomeData!= null && NewsData != null &&ArticleData != null && PhotoData != null ? 

          <div className="home">
            <div className="columnHome">
              <div className="logo">
                <img className="logoImg" src={HomeData.logo_instansi} alt="thelogo"></img>
              </div>
              <div> 
                <p  className="name">{HomeData.nama_instansi}</p>
              </div>
              <div className="description">
                <div className="email">
                  <div className="icon">
                    <BsEnvelope size={35} className="icon"/>
                  </div>
                  <div>
                    <p className="details1">Email</p>
                    <p className="details">{HomeData.email}</p>
                  </div>
                </div>
                <div className="location">
                  <div className="icon">
                    <BsGeo size={35} className="icon"/>
                  </div>
                  <div>
                    <p className="details1">Alamat</p>
                    <p className="details">{HomeData.alamat}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel">
              <Carousel />
            </div>
            <div className="theInstansi">
              <div>
                <p className="nameTitle">{HomeData.nama_instansi}</p>
                <Link to="/profil-instansi" >
                  <div className="buttonDetails">
                    <p className="nameButton">Lihat Selengkapnya</p>
                  </div>
                </Link>
              </div>
              <div className="lg-style">
                <img className="logoImg2" src={HomeData.logo_instansi} alt="thelogo"></img>
              </div>
            </div>
            <div className="split-view-home">
              <div className="left-view">
                <div className="gallery">
                  <Link to="/image-gallery">
                    <p  className="subMenuName">Galeri</p>
                  </Link>
                  <div className='theGallery'>
                  {PhotoData.map(item => 
                      <img
                        className="the-picture"
                        src={item}
                        alt="First slide"
                      />
                  )}
                  </div>
                </div>
                <div className="news">
                  <Link to="/news">
                    <p className="subMenuName">Berita</p>
                  </Link>
                  <div className='theNews'>
                    {NewsData.map(item => 
                      <div className="the-detail-news-home">
                        <img
                          className="the-picture2"
                          src={item.image_file_data}
                          alt="the-detail-news"
                        />
                        <div>
                          <p className="textDetails3">{item.title}</p>
                          <p className="textIntro3">{item.intro}</p>
                        </div>
                      </div>                
                    )}
                  </div>
                </div>
                <div className="article">
                  <Link to="/article">
                    <p className="subMenuName">Artikel</p>
                  </Link>
                  <div className='theArticle'>
                    {ArticleData.map(item => 
                      <div className="the-detail-article">
                        <div>
                          <p className="textDetails2">{item.title}</p>
                          <p className="textIntro2">{item.intro}</p>
                        </div>
                        <img
                          className="the-picture2"
                          src={item.image_file_data}
                          alt="the-detail-article"
                        />
                      </div>                
                    )}
                  </div>
                </div>
              </div>
              <div className="right-view">
                <div className="categoryNews">
                  <CategoryNews/>
                </div>
                <div className="categoryArticle">
                  <CategoryArticle/>
                </div>
              </div>
            </div>
          </div>
          
        : 
        <>
          <Spinner size='xl' />
          <p>Loading</p>
        </>
      }
     </> 
  );
}

export default Home;
