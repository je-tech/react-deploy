import React from 'react';
import style from'./Recipes.module.css';
  
const Recipe= ({title,calories,image,ingredients}) =>{
    return(
        <div className={style.recipe}>
         
        
            <h1>
                {title}
            </h1>
            <img src={image} alt=""/>

            <p>Recipe</p>
            <ol>
                {ingredients.map (ingredient =>( <ol>{ingredient.text} </ol>
                ))}
            </ol>
            <button  className="read" type="submit"> Read Recipe</button>

            
        </div>

    );
}
export default Recipe;