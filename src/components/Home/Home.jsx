

import React, { useCallback, useEffect, useState } from "react";
import "./HomeStyle.css";
import Footer from "../Footer/Footer";


const Home = () => {


  const [imgChange, setimgChange] = useState(false);
  const [particularimgChange, setParticularimgChange] = useState("");
  const [particularimgid, setParticularimgid] = useState("");
  const [apiData, setApiData] = useState([]);

  const [favouriteactive,setFavouriteactive] = useState(false)
  const [favouriteid,setFavouriteId] = useState('')

  const handleFavouriteActive =(favid)=>{
    setFavouriteactive(!favouriteactive)
    setFavouriteId(favid)
  }

  
  const handleImageChange =useCallback((id, imgsrc2) => {
    setimgChange(!imgChange);
    setParticularimgChange(imgsrc2);
    setParticularimgid(id);
  }, [imgChange]);


  useEffect(() => {
    
    handleImageChange(particularimgid, particularimgChange);
    // eslint-disable-next-line
  }, [particularimgid, particularimgChange]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error("Error fetching data from the API:", error);
      }
    };

    fetchData();
  }, []);

  console.log(apiData)

  return (
    <>
      <div className="Home-main-div">
        <select className="Home-main-select-items" name="" id="">
          <option value="">Recommended</option>
          <option value="">All</option>
          <option value="">Favourites</option>
        </select>

        <div className="flash-sale-container">
          {apiData.map((items) => (
            <div key={items.id} className="card flash-sale-container-card">
              <div className="flash-sale-container-card-img">
                <img
                  src={ items.image} className="card-img-top" alt={`Product pic for ${items.title}`}/>
              </div>
              <div className="card-body flash-sale-container-card-body">
                <h5>{items.title.length>10?`${items.title.slice(0,10)}`:items.title}</h5>
                <p>{items.description.length>30?`${items.description.slice(0,30)}...`:items.description}</p>
                <i onClick={()=>handleFavouriteActive(items.id)} className={favouriteactive&&favouriteid===items.id?"fa-regular fa-heart Home-Favourites-logo-active":"fa-regular fa-heart Home-Favourites-logo-inactive"}></i>
              </div>
            </div>
          ))}
        </div>
     
      </div>
      <Footer/>
      
    </>
  );
};

export default Home;
