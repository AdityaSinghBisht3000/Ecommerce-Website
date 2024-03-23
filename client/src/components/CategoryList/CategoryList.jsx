import React, { useContext } from "react";
import Category from "../Category/Category";
import { Context } from "../../utils/context";
import { useNavigate } from "react-router-dom";

export default function CategoryList({ headingText, categories }) {
  const navigate = useNavigate();
  console.log(categories);
  return (
    <div className="shop-by-category">
      <div className="categories">
        {<div className="sec-heading">{headingText}</div>}
        {categories?.data?.map((item) => (
          <div
            key={item.id}
            className="category"
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <img
              src={
                process.env.REACT_APP_STRIPE_APP_DEV_URL +
                item.attributes.img.data.attributes.url
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
