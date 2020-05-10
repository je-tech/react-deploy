import React,{useEffect,useState} from 'react';
import Recipe from "./Recipes";
import WebsitePicture from './img2/DELI.png';
import './App.css';

const App=()=>{
  
 

const[querylink,noQuery]=useState('');


 const[search,nosearch]=useState("");

 const[recipes,noRecipes]=useState([]);
 
 const Applicationkey="521f8eb62b6f5613ef73d1e4578f4cd6";
 const ApplicationID="0b8b92c8";
 
  useEffect( () => {
    reqReciepes();

   }, [querylink]);
    

      const reqSearch = a =>{
        a.preventDefault();
        noQuery(search);
      }
      

      const Searchitem = a =>{
       nosearch(a.target.value);

      }
      
      const reqReciepes = async() => {
        const response = await fetch(
          `https://api.edamam.com/search?q=${querylink}&app_id=${ ApplicationID}&app_key=${Applicationkey}`
          );
     const data = await response.json();
     //console.log(data.hits);
     noRecipes(data.hits);
     

      }
     

  return(

    
        


    


    <div  className="RecipeApp">
       <img src= {WebsitePicture} alt=" WebsitePicture"  />
    
          <form  onSubmit={reqSearch}  className="AppForm"  > 
   
    <input className="searchRecipe" type="text" value={search}  onChange={Searchitem} />
    <button  className="search-btn" type="submit"> Search</button>
   
    </form>
    <nav>
    
    <h1>Welcome to the Recipe App</h1>
    <h3>Get your favourite food recipe from 1000+ recipes</h3>
        <ul>
          <li> <button class="btn"> Home </button></li> 
           <li> <button class="btn"> About  </button></li>
            <li> <button class="btn"> Services  </button> </li>
             <li> <button class="btn"> News  </button>  </li>
              <li> <button class="btn"> Contact information  </button></li>
        </ul>
        </nav>

  

    <div className="recipes">
  {recipes.map(reci => (
    <Recipe 
    key={reci.recipe.label}
    title={ reci.recipe.label} 
    ingredients={reci.recipe.ingredients}
    image={reci.recipe.image}
    
    
    

   
      />
  ))}
  </div>
  </div>
    
    
  
  );
};
export default App;
