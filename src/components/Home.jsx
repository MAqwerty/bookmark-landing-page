import React from "react";
import "./Styles-pages/Home.css"
import Article1Main from './MAIN-component/Article1-Main/Article1-Main';
import Article2Main from './MAIN-component/Article2-Main/Article2-Main';
import Article3Main from './MAIN-component/Article3-Main/Article3-Main';
import Article4Main from './MAIN-component/Article4-Main/Article4-Main';
import Article5Main from './MAIN-component/Article5-Main/Article5-Main';
import Article6Main from './MAIN-component/Article6-Main/Article6-Main';

import Article1Footer from "./Footer-component/Article1-Footer/Article1-Footer"
import Article2Footer from "./Footer-component/Article2-Footer/Article2-Footer"

import Data from "./MAIN-component/Article5-Main/data.json"

const Home = () => {
  return (
    <>
    <main>
        <Article1Main />

        <Article2Main />

        <div className="container-Article3-Main">
          <div className="Article3Main">
            <Article3Main />
          </div>        
          <div className="blue-card-Article3-Main"></div>
        </div>

        <Article4Main />

        <div className="Article5Main">
              {Data.data.map((data, key) => {
                return (
                  <div key={key}>
                    <Article5Main id={data.id} title={data.title} link={data.link} imgSrc={data.imgSrc} link={data.link} text={data.text} imgSVG={data.imgSVG}
                    />
                  </div>
                );
              })}
          </div>

        <Article6Main />
      </main>

      <footer>
        <Article1Footer />
        <Article2Footer />
      </footer>
    </>
  )
};

export default Home;
