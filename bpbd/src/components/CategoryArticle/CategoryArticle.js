import React, {useState, useEffect} from 'react';
import axios from 'axios';

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
      <p className="subMenuName">Kategori Artikel</p>
        {CategoryArticleData.map(item => 
          <>
            <p className="textCategory ">{item.nama_kategori}</p>
            <hr></hr>   
          </>            
        )}
    </>
  );
  
} 

export default CategoryArticle;
