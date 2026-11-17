import React from "react"
import Highlights from "../Highlights";
import Featured from "../Featured";
import Explore from "../UI/Explore";
import Discounted from "../Discounted";

const Home = (props) => {
  return (
    <>
        <Highlights />
        <Featured />
        <Discounted />
        <Explore />
    </>
  )
};

export default Home;
