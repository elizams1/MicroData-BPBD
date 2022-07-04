import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './CategoryArticle.css';
import { Spinner } from '@chakra-ui/react';
import { Link } from "react-router-dom";

function CategoryArticle() {
  const [loading, setloading] = useState(false);
  //Mencari kategori artikel menggunakan id instansi
  const [CategoryArticleData, setCategoryArticleData] = useState([]);
  useEffect(() => {
    setloading(true);
    axios
        .get("http://adminmesuji.embuncode.com/api/article/categories/31")
        .then(function (catArticle) {
          setCategoryArticleData(catArticle.data.data);
          console.log("console header: " + catArticle.data.data);
          setloading(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);
    
  return(
    <>
    {loading ? 
    (
      <div className="loading">
        <Spinner size='lg' color="#075098" />
        <p>Loading</p>
      </div>
    ) :
      <div className="box-category">
        <p className="categoryName">Kategori Artikel</p>
        {CategoryArticleData.map(item => 
            <Link to={{ 
            pathname:'/article/category/' + item.slug
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

export default CategoryArticle;
