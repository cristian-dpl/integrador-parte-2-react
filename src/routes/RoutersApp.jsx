import { BrowserRouter, Route, Routes } from "react-router-dom"

import { NavBar } from "../layout/NavBar"
import { Home } from "../pages/Home"
import { Footer } from "../layout/Footer"
import { MiContact } from "../pages/MiContact"
import { MiUpload } from "../pages/MiUpload"
import { MIWe } from "../pages/MIWe"



export const RoutersApp = () => {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/upload" element={<MiUpload/>}/>
            <Route path="/contact" element={<MiContact/>}/>
            <Route path="/we" element={<MIWe/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}
