import React from "react"
import UndrawBooks from '../assets/Undraw_Books.svg'; 


const Landing = (props) => {
  return (
   <section id="landing">
    <header>
        <div className="header__container">
            <div className="header__Description">
                <h1>Most awared online library platform</h1>
                <h2>Find you book with <span className="purple">Library</span></h2>
                <a href="#features" className="href">
                    <button className="btn">Browse Books</button>
                </a>
                <figure className="header__img--wrapper">
                    <img src="{UndrawBooks}" alt="" />
                </figure>
            </div>
        </div>
    </header>
   </section>
  )
};

export default Landing;
