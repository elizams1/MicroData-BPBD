import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Menu.css';

function Menu(){
  const [MenuData, setMenuData] = useState([]);
  useEffect(() => {
      axios
        .get("http://adminmesuji.embuncode.com/api/menus?instansi_id=31")
        .then(function (menu) {
          setMenuData(menu.data);
          console.log("console header: " + menu.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);

  return(
    <div className="theMenu">
      {MenuData.map(item => <div className="button" >{item.name}</div> )}
      
    </div>
  );
}

export default Menu;
