import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';

function TheCarousel() {
  //Mencari data berita menggunakan id instansi
  const [CarouselData, setCarouselData] = useState([]);
  useEffect(() => {
      axios
        .get("http://adminmesuji.embuncode.com/api/news?instansi_id=2")
        .then(function (thecarousel) {
          var temp =[]
          for (let i = 0; i < 3; i += 1) {
              if (i < thecarousel.data.data.data.length) {
                  temp.push(thecarousel.data.data.data[i])
              }

          }
          setCarouselData(temp);
          console.log("console header: " + thecarousel.data.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);

  return (
    <>
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
    </>
  );

}

export default TheCarousel;