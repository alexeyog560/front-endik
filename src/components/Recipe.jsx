import React from "react";
import { Link } from "react-router-dom";

function Recipe({ id, name, imageUrl }) {
  return (
    <Link to={`recipe/${id}`} style={{ textDecoration: "none" }}>
      <div className="recipe">
        <img src={imageUrl} alt="" className="recipe-image" />
        <div className="recipe-name">{name}</div>
      </div>
    </Link>
  );
}

export default Recipe;
