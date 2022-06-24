import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Home.css';
import { BsEnvelope, BsGeo } from "react-icons/bs";
import { Carousel } from 'react-bootstrap';


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

  //Mencari data berita menggunakan id instansi
  const [CarouselData, setCarouselData] = useState([]);
  useEffect(() => {
      axios
        .get("http://adminmesuji.embuncode.com/api/news?instansi_id=2")
        .then(function (carousel) {
          var temp =[]
          for (let i = 0; i < 3; i += 1) {
              if (i < carousel.data.data.data.length) {
                  temp.push(carousel.data.data.data[i])
              }

          }
          setCarouselData(temp);
          console.log("console header: " + carousel.data.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);
  
  // Mencari kategori berita menggunakan id instansi
  const [CategoryNewsData, setCategoryNewsData] = useState([]);
  useEffect(() => {
      axios
        .get("http://adminmesuji.embuncode.com/api/news/categories/3")
        .then(function (catNews) {
          setCategoryNewsData(catNews.data.data);
          console.log("console header: " + catNews.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);
  
  //Mencari kategori artikel menggunakan id instansi
  const [CategoryArticleData, setCategoryArticleData] = useState([]);
  useEffect(() => {
      axios
        .get("http://adminmesuji.embuncode.com/api/article/categories/3")
        .then(function (catArticle) {
          setCategoryArticleData(catArticle.data.data);
          console.log("console header: " + catArticle.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);

  return (
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
        <Carousel>
            {CarouselData.map(item => 
                <Carousel.Item className='theCarousel'>
                  <img
                    className="d-block w-100 theCarousel"
                    src={item.image_file_data}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <p className="carouselTittle">{item.title}</p>
                  </Carousel.Caption>
                </Carousel.Item>
            )}
        </Carousel>
      </div>
      <div className="theInstansi">
        <div>
          <p className="nameTitle">{HomeData.nama_instansi}</p>
          <div className="buttonDetails">
            <p className="nameButton">Lihat Selengkapnya</p>
          </div>
        </div>
        <div className="lg-style">
          <img className="logoImg2" src={HomeData.logo_instansi} alt="thelogo"></img>
        </div>
      </div>
      <div className="splitView">
        <div className="leftView">
          <div className="picture">
            <p className="subMenuName">Galeri</p>
            <div className='theGallery'>
            {CarouselData.map(item => 
              
                <img
                  className="thePicture"
                  src={item.image_file_data}
                  alt="First slide"
                />
              
            )}
            </div>
          </div>
          <div className="news">
            <p className="subMenuName">Berita</p>
            <div className='theNews'>
              {CarouselData.map(item => 
                <div className="detailNews">
                  <img
                    className="thePicture"
                    src={item.image_file_data}
                    alt="First slide"
                  />
                  <p className="textDetails">{item.title}</p>
                </div>                
              )}
            </div>
          </div>
          <div className="article">
            <p className="subMenuName">Artikel</p>
            <div className='theNews'>
              {CarouselData.map(item => 
                <div className="detailNews">
                  <p className="textDetails">{item.title}</p>
                  <img
                    className="thePicture"
                    src={item.image_file_data}
                    alt="First slide"
                  />
                </div>                
              )}
            </div>
          </div>
        </div>
        <div className="rightView">
          <div className="categoryNews">
            <p className="subMenuName">Kategori Berita</p>
            {CategoryNewsData.map(item => 
              <p className="textCategory ">{item.nama_kategori}</p>                
            )}
        </div>
          <div className="categoryArticle">
            <p className="subMenuName">Kategori Artikel</p>
            {CategoryArticleData.map(item => 
              <p className="textCategory ">{item.nama_kategori}</p>                
            )}
          </div>
        </div>
      </div>
    </div>  
  );
}

export default Home;
