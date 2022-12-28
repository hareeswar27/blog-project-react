import React from 'react'
import RoutePages from './routePages/RoutePages'
import FillExample from './Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import SinleTab from './Components/SinleTab'
import "./App.css"
function App() 
{
  return (
<>
<div className='fir1'>
the
<h1 className='hed1'>siren</h1>

<br/>
</div>
<br/>

<FillExample/>
<br/>
<hr/>
<RoutePages/>
<Routes>
  <Route path='/SinleTab' element={<SinleTab/>}/>
  </Routes>
</>
  )
}
export default App