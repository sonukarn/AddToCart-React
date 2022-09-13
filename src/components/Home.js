import React from "react";
import "./styles.css";
import { CartState } from "../contexts/Context";
import Header from "./Header";
import SingleProduct from "./SingleProduct";
import Filters from "./Filters";

const Home = () => {
  const {
    state: { products },
  } = CartState();

  console.log(products);
  return (
    <div>
      <Header />
      <div className="home">
        {<Filters />}
        <div className="productContainer">
          {products.map((prod) => {
            return <SingleProduct prod={prod} key={prod.id} />;
          })}
        </div>
      </div>
      <h1>Welcome to our Website</h1>
    </div>
  );
};

export default Home;
