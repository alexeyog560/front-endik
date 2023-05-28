import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

function MainPage() {
  const [recipes, setRecipes] = useState(false);

  const fetchData = async () => {
    await fetch("https://64726ca86a9370d5a41b52d4.mockapi.io/recipes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRecipes(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {recipes ? (
        <div className="flex-main">
          {recipes.map((obj) => (
            <Recipe key={obj.id} id={obj.id} name={obj.name} imageUrl={obj.imageUrl} />
          ))}
        </div>
      ) : (
        <div className="loading">loading...</div>
      )}
    </>
  );
}

export default MainPage;
