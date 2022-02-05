
import { useState } from 'react';
import './App.css';
import Axios from 'axios';
import Recipe from './Recipe';

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabel, sethealthLabel] = useState("vegan");

  var url=`https://api.edamam.com/search?q=${query}&app_id=fed91da5&app_key=19b418f5c0094e2ea0180d658a5eab92&health=${healthLabel}`;
  async function getRecipe(){
    var results=await Axios.get(url);
    setrecipes(results.data.hits);
    console.log(results.data);

  }
  const onsubmit=(e)=>{
    e.preventDefault();
    getRecipe();
  }
  return (
    <div className="App">
      <h1>Food Recipe</h1>
      <form className='app__form' onSubmit={onsubmit}>
        <input className='app__input' type="text" placeholder="input ingredient" value={query}
        onChange={(e)=>setquery(e.target.value)}></input>
        <input className='app__submit' type='submit' value="Submit" ></input>
        <select className='app__healthLabels'>
          <option onClick={()=>sethealthLabel("vegan")}>vegan</option>
          <option onClick={()=>sethealthLabel("vegetarian")}>vegetarian</option>
          <option onClick={()=>sethealthLabel("paleo")}>paleo</option>
          <option onClick={()=>sethealthLabel("dairy-free")}>dairy-free</option>
          <option onClick={()=>sethealthLabel("gluten-free")}>gluten-free</option>
          <option onClick={()=>sethealthLabel("wheat-free")}>wheat-free</option>
          <option onClick={()=>sethealthLabel("fat-free")}>fat-free</option>
          <option onClick={()=>sethealthLabel("low-sugar")}>low-sugar</option>
          <option onClick={()=>sethealthLabel("egg-free")}>egg-free</option>
          <option onClick={()=>sethealthLabel("peanut-free")}>peanut-free</option>
          <option onClick={()=>sethealthLabel("tree-nut-free")}>tree-nut-free</option>
          <option onClick={()=>sethealthLabel("soy-free")}>soy-free</option>
        
        </select>
      </form>
      <div className='app__recipes'>
      {recipes.map((recipe)=>{
       return <Recipe key={recipe["recipe"]["label"]} recipe={recipe}/>
      })}
    </div>
    </div>
  );
}

export default App;
