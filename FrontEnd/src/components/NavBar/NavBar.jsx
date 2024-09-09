import React, { useState } from "react";
import "./NavBar.css";
import profile from "../../assets/profile.jpg";
import { BiHomeSmile } from "react-icons/bi";
import { TbBook } from "react-icons/tb";
import { MdOutlineFastfood } from "react-icons/md";

const NavBar = () => {

  let [link, setLink] = useState("home");


  return (
    <div className="navbar">
      <img src={profile} alt="" />
      <div className="nav-section1">

        <div onClick={()=>setLink("home")} className={link==="home"?"active":"nav-links"}>
          <BiHomeSmile />
          <div className="link-border">
          <a href="#home">Home</a>
          </div>
        </div>
        <div onClick={()=>setLink("menu")} className={link==="menu"?"active":"nav-links"}>
          <TbBook />
          <div className="link-border">
          <a href="#menu">Menu</a>
          </div>
        </div>
        <div onClick={()=>setLink("order")} className={link==="order"?"active":"nav-links"}>
          <MdOutlineFastfood />
          <div className="link-border">
          <a href="#order">Order</a>
          </div>
        </div>
      </div>
      {/* <div className="nav-section2">
        <button>Search</button>
        <button>Sign Up</button>
      </div> */}
    </div>
  );
};

export default NavBar;
