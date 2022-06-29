import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CategoryNews from '../CategoryNews/CategoryNews.js';
import CategoryArticle from '../CategoryArticle/CategoryArticle.js';
import './Document.css';
import {BsFillFileEarmarkArrowDownFill} from 'react-icons/bs';

function Document(){

  const [DocumentData, setDocumentData] = useState([]);
  useEffect(() => {
    axios
      .get("http://adminmesuji.embuncode.com/api/dokumen?instansi_id=15")
      .then(function (doc) {
        setDocumentData(doc.data.data.data);
        console.log("console header: " + doc.data.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return(
    <>
      <div className="document-page">
        <div className="split-view-document">
          <div className="left-view-document">
            <p className="document-title">DOKUMEN</p>
            <div className="the-document">
              {
                DocumentData.map(item=>
                  <div className="the-sub-document">
                    <p className="document-name">{item.name}</p>
                    <div className="document-file ">
                      <BsFillFileEarmarkArrowDownFill size={15} color="#075098" className="icons"/>
                      <p className="document-file-name">{item.dokumen_item[0].dokumen_file_name}</p>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
          <div className="right-view-document">
            <div className="categoryNews">
              <CategoryNews/>
            </div>
            <div className="categoryArticle">
              <CategoryArticle/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Document;