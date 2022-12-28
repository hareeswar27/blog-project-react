import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from "../Components/Home";
import Food from "../Components/Food";
import Hollywood from "../Components/Hollywood";
import Tollywood from "../Components/Tollywood";
import Technology from "../Components/Technology";
import Fitness from "../Components/Fitness";


function RoutePages() 
{
  return (
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Home' element={<Home/>}/>
  <Route path='/Food' element={<Food/>}/>
  <Route path='/Hollywood' element={<Hollywood/>}/>
  <Route path='/Tollywood' element={<Tollywood/>}/>
  <Route path='/Technology' element={<Technology/>}/>
  <Route path='/Fitness' element={<Fitness/>}/>
  
  </Routes>
  )
}
export default RoutePages