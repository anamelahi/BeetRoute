import React from "react";
import "./Home.css";
import { LuSearch } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import CategoryBtn from "../components/CategoryBtn/CategoryBtn";
import burgerbtn from "../assets/burger.png"
import pizzabtn from "../assets/pizza.png"
import dessertbtn from "../assets/dessert.png"
import saladbtn from "../assets/salad.png"
import drinkbtn from "../assets/beverage.png"
import all from "../assets/all-item.png"



const Home = () => {
  return (
    <div className="home">

      <div className="header">
        <h1>Welcome to <br /> Beet Route</h1>
        <div className="action-btns">
          <button><LuSearch className="search-icon icon"/></button>
          <button><FiShoppingCart className="cart-icon icon"/> </button>
        </div>
      </div>   

      <div className="category">
      <CategoryBtn img={all} title="All Item"/>
        <CategoryBtn img={burgerbtn} title="Burger"/>
        <CategoryBtn img={pizzabtn} title="Pizza"/>
        <CategoryBtn img={dessertbtn} title="Dessert"/>
        <CategoryBtn img={saladbtn} title="Salad"/>
        <CategoryBtn img={drinkbtn} title="Drinks"/>
      </div>
    </div>
  );
};

export default Home;
