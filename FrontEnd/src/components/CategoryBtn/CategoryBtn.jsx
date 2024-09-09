import React from "react";
import burgerbtn from "../../assets/burger.png"
import "./CategoryBtn.css"

const CategoryBtn = (props) => {
  return (
    <button className="category-btn">
      <img src={props.img} alt="" /> {props.title}
    </button>
  );
};

export default CategoryBtn;
