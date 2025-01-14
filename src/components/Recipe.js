import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const params = useParams();
  const id = params.id;
  const [recipeInfo, setRecipeInfo] = useState(null);

  useEffect(() => {
    console.log(id);
    const fetchRecipe = async () => {
      const apiKey = process.env.REACT_APP_API_KEY;
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=0c6204b3e45b47988582e48c76e0b346`,
      );
      const responseJSON = await response.json();
      setRecipeInfo(responseJSON);
    };
    fetchRecipe();
  }, [id]);
  {
    return (
      recipeInfo && (
        <div className="recipe-details">
          <h1>{recipeInfo.title}</h1>
          <img src={recipeInfo.image} alt={recipeInfo.title} />
          <div dangerouslySetInnerHTML={{ __html: recipeInfo.summary }} />
          <h2>Ingredients</h2>
          <ul>
            {recipeInfo.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
          <h2>Instructions</h2>
          <ol>
            {recipeInfo.analyzedInstructions[0].steps.map((step) => (
              <li key={step.number}>{step.step}</li>
            ))}
          </ol>
        </div>
      )
    );
  }
};
export default Recipe;
