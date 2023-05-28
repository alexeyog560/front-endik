import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(false);

  const getDataById = async (recipeId) => {
    fetch(`https://64726ca86a9370d5a41b52d4.mockapi.io/recipes/${recipeId}`)
      .then((response) => response.json())
      .then((data) => {
        // Обработка полученных данных
        setRecipe(data);
      });
  };

  useEffect(() => {
    getDataById(id);
  }, []);

  return (
    <div className="recipepage">
      {recipe ? (
        <>
          <img src={recipe.imageUrl} alt="" className="recipepage-image" />
          <div className="recipepage-name">{recipe.name}</div>
          <p>{recipe.description}</p>
          <p>
            Recipe:{" "}
            <a href={recipe.recipeUrl} target="_blank" className="recipepage-a">
              {recipe.recipeUrl}
            </a>{" "}
          </p>
          <Link to="/" className="recipepage-button">
            go back
          </Link>
        </>
      ) : (
        <div className="loading">loading...</div>
      )}
    </div>
  );
}

export default RecipePage;
