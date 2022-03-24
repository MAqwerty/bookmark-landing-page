import React from "react";
import "./Style-Article5-Main.css"
import dotsSVG from "./../../../assets/svg/bg-dots.svg"

const Article5Main = ({id,imgSVG,title,text,link}) => {

  return (
    <div className={id} >
      <img src={imgSVG} className="img-Article5-Main" alt="" />
      <h2 className="h2-Article5-Main">{title}</h2>
      <p className="p-Article5-Main">{text}</p>
      <img src={dotsSVG} alt="" />
      <a className="a-Article5-Main" href={link}>Add &amp; Install Extension</a>
    </div>
  )
};

export default Article5Main;
