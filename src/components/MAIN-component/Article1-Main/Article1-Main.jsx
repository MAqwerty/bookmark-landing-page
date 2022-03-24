import React from "react";
import "./Style-Article1-Main.css"
import IMGArticle1 from "./../../../assets/svg/illustration-hero.svg"

const Article1Main = () => {
  return (
    <>
      <article className="container-Article1-Main">
        
        <div className="TEXT-Article1-Main">
          <h1 className="h1-Article1-Main">A Simple Bookmark Manager</h1>
          <p className="p-Article1-Main">A clean and simple interface to organize your favourite websites. Open a new 
            browser tab and see your sites load instantly. Try it for free.</p>
          <div className="btn-Article1-Main">
            <a className="btn-Chrome" >Get it on Chrome</a>
            <a className="btn-Firefox" >Get it on Firefox</a>
          </div>
        </div>

        <div className="IMG-Article1-Main">
          <img className="IMGArticle1" src={IMGArticle1} alt="" />
          <div className="blue-card-Article1-Main"></div>
        </div>
      
      </article>
    </>
  )
};

export default Article1Main;
