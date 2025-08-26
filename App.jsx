import { Route, Routes } from "react-router-dom"
import Crud from "./Crud"
// import './App.css'

import Crud2 from "./Crud2"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Navbar from "./components/Navbar"
import Login from "./components/Login"

import Contact from "./components/Contact"
import FormEdit from "./FormEdit"
import Formadd from "./formadd"
import Table from "./Table"
import { useState } from "react"

import Crud3 from "./Crud3"

import Dataadd from "./Dataadd"
import Dataedit from "./Dataedit"
import Datatable from "./Datatable"



function App() {

  const [formData, setFormData] = useState([]);
 
  return (
    <>
     <div>

        {/* <Routes>
          <Route path="/" exact element={<Datatable formdata={formdata} setFormData={setFormData}/>}></Route>
          <Route path="/dataedit" exact element={<Dataedit formdata={formdata} setFormData={setFormData}/>}></Route>
          <Route path="/dataadd" exact element={ <Dataadd formdata={formdata} setFormData={setFormData}/>}></Route>
        </Routes> */}
   
        <Crud3/> 
       

      {/* <Routes>
        <Route path="/" exact element={<Table formData={formData} setFormData={setFormData}/>}> </Route>
        <Route path="/formedit" exact element={<FormEdit formData={formData} setFormData={setFormData}/>}> </Route> 
        <Route path="/formadd" exact element={<Formadd formData={formData} setFormData={setFormData}/>}></Route>
      </Routes>
         */}
        
        {/* <RouterProvider router={router} /> */}
        
        {/* <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
        </Routes> */}
        {/* <Crud/> */}
        {/* <Crud2/> */}
     </div>
    </>
  )
}

export default App
