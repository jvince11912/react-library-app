import React from "react"
import Highlights from "../Highlights";
import Featured from "../Featured";
import Explore from "../UI/Explore";
import Discounted from "../Discounted";
import Landing from "../Landing";

const Home = (props) => {
  console.log("Home rendered");

  return ( 
    <>  
        <Landing />
        <Highlights />
        <Featured />
        <Discounted />
        <Explore />
    </>
  )
};

export default Home;
