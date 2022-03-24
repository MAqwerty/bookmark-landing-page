import React from "react";
import "./Style-Article1-Footer.css"
import errorSVG from "./../../../assets/svg/icon-error.svg"
import { useState , useEffect } from "react";

const Article1Footer = () => {

  const[value,Setvalue]=useState("")

  useEffect(() => {
    function validateEmail (emailAdress){

      let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (emailAdress.match(regexEmail)) {
        document.getElementById("Message").style.display = "none";
      } 
      else {
        document.getElementById("Message").style.display = "block";
        document.getElementById('errorSVG').style.display = "block";
        document.getElementById('containerERROR').style.backgroundColor = "#f65859"
      }
    }
    function TESTEmail (emailAdress){
      emailAdress=value
      validateEmail(emailAdress)
    }
    document.getElementById("BTNsubmit").addEventListener("click",TESTEmail);
  });

  return (
    <>
      <article className="container-Article1-Footer">

        <div className="TEXT-Article1-Footer">
          <p className="p-Article1-Footer">35,000+ already joined</p>  
          <h2 className="h2-Article1-Footer">Stay up-to-date with what we’re doing</h2>
        </div>
    
        <form action="" method="post" className="form-Article1-Footer">
          <article className="email-container-Article1-Footer" id="containerERROR">
            <div className="input-container-Article1-Footer">
              <input type="email" required name="" id="" onChange={(e) => Setvalue(e.target.value)} value={value} className="input-Article1-Footer" placeholder="email@example.com" />
              <img src={errorSVG} alt="" className="errorSVG" id="errorSVG" />
            </div>
            <p className="p-valid-email" id="Message">Whoops, make sure it's an email</p>
          </article>
          <button type="submit" className="BTN-Article1-Footer" id="BTNsubmit">Contact Us</button>
        </form>

      </article> 
    </>
  )
};

export default Article1Footer;