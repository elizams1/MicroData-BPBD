import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Spinner } from '@chakra-ui/react';
import './CategoryNews.css';
import { Link } from "react-router-dom";

function CategoryNews() {
  const [loading, setloading] = useState(false);
  // Mencari kategori berita menggunakan id instansi
  const [CategoryNewsData, setCategoryNewsData] = useState([]);
  useEffect(() => {
    setloading(true);
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
    
  return(
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
          <Link to={{ 
            pathname:'/news/' + item.nama_kategori
           }}>
            <p className="textCategory ">{item.nama_kategori}</p>
            <hr className="the-line"></hr> 
          </Link> 
        ) 
        }
      </div>
    }
    </>
  );
  
} 

export default CategoryNews;
