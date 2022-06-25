import React, {useState, useEffect} from 'react';
import axios from 'axios';

function CategoryNews() {
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
    
  return(
    <>
      <p className="subMenuName">Kategori Berita</p>
      {CategoryNewsData.map(item => 
        <p className="textCategory ">{item.nama_kategori}</p>                
      )}
    </>
  );
  
} 

export default CategoryNews;
