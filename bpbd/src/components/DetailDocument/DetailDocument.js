import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CategoryNews from '../CategoryNews/CategoryNews.js';
import CategoryArticle from '../CategoryArticle/CategoryArticle.js';
import { useParams } from "react-router";
import { Spinner } from '@chakra-ui/react';
import './DetailDocument.css';

function DetailDocument() {
  const {slug} = useParams()

  const [DetailDoc, setDetailDoc]=useState([]);

  useEffect(() => {
    axios
      .get("http://adminmesuji.embuncode.com/api/dokumen/" + slug)
      .then(function (doc) {
        setDetailDoc(doc.data.data[0]);
        console.log("console header: " + doc.data.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [slug]);
  console.log(DetailDoc);

  return(
    <>
      <div className="detailDoc-page">
        <div className="split-view-detailDoc">
          <div className="left-view-detailDoc">
            <p className="detailDoc-title">{DetailDoc.nama_dokumen}</p>
            {DetailDoc != null ? 
              <div className="the-file-document">
                <iframe src={"data:application/pdf;base64," + DetailDoc.dokumen_file_data} 
              height="100%" 
              width="100%" 
              frameBorder="0" 
              scrolling="auto"></iframe>
              </div> : 
              <>
                <Spinner size='xl' />
                <p>Loading</p>
              </>
            }
          </div>
          <div className="right-view-detailDoc">
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

export default DetailDocument;