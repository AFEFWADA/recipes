import React, { useEffect, useState } from "react"
import './App.css';
import AllRecipes from './components/AllRecipes';
import Categories from './components/Categories';
import Onerecipe from './components/Onerecipe';
import NavBar from './layouts/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Route, Routes } from "react-router-dom";

function App() {
  // states 
  const [recipes,setRecipes]=useState([])
  const [search,setSearch] = useState("")


  //functions & variables 
const fetchRecipes = async () => {
  try {
    const response = await axios.get("http://localhost:3000/recipes.json") //promise
    setRecipes(response.data)
    
  } catch (error) {
    console.log(error)
  }
}

  //useEffects
useEffect(()=>{
  fetchRecipes()
},[]) // useEffect allow me to apply some side effects on the component lifecycle 
  return (
    <div className="App">
      <NavBar setSearch={setSearch}/>
      <AllRecipes recipes={recipes} search={search}/>

    </div>
  );



}

export default App;
