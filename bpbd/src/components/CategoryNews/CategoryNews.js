import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './CategoryNews.css'

function CategoryNews() {
  // Mencari kategori berita menggunakan id instansi
  const [CategoryNewsData, setCategoryNewsData] = useState([]);
  useEffect(() => {
      axios
        .get("http://adminmesuji.embuncode.com/api/news/categories/31")
        .then(function (catNews) {
          setCategoryNewsData(catNews.data.data);
          console.log("console header: " + catNews.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);
    
  return(
    <>
      <div className="box-category">
        <p className="categoryName">Kategori Berita</p>
        {CategoryNewsData.map(item => 
          <>
            <p className="textCategory ">{item.nama_kategori}</p>
            <hr className="the-line"></hr> 
          </>           
        )}
      </div>
      
    </>
  );
  
} 

export default CategoryNews;
