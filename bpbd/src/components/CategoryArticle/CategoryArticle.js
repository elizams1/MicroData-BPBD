import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './CategoryArticle.css'

function CategoryArticle() {
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
    
  return(
    <>
      <div className="box-category">
        <p className="categoryName">Kategori Artikel</p>
          {CategoryArticleData.map(item => 
            <>
              <p className="textCategory ">{item.nama_kategori}</p>
              <hr className="the-line"></hr>   
            </>            
          )}
      </div>
      
    </>
  );
} 

export default CategoryArticle;
