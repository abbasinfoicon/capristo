import React from 'react'
import { Route, Routes } from "react-router-dom"
import About from '../views/About'
import Blog from '../views/Blog'
import Car from '../views/Car'
import Career from '../views/Career'
import CarList from '../views/CarList'
import Contact from '../views/Contact'
import CookiePolicy from '../views/CookiePolicy'
import Home from '../views/Home'
import Impressum from '../views/Impressum'
import Models from '../views/Models'
import ModelParts from '../views/ModelParts'
import PageNotFound from '../views/PageNotFound'
import Partner from '../views/Partner'
import PrivacyPolicy from '../views/PrivacyPolicy'
import Shop from '../views/Shop'
import ModelDetails from '../views/ModelDetails'
import ModelsCarbon from '../views/ModelsCarbon'
import Parts from '../views/Parts'
import Dark from '../layouts/Dark'
import Light from '../layouts/Light'

const RouteApi = () => {

    return (
        <Routes>
            <Route path="/" element={<Light><Home /></Light>} />
            <Route path="/about" element={<Dark><About /></Dark>} />
            <Route path="/contact" element={<Light><Contact /></Light>} />

            <Route path="/car-list" element={<Dark><CarList /></Dark>} />
            <Route path="/car-list/:slug" element={<Light><Car /></Light>} />
            <Route path='/car-list/:slug/models' element={<Dark><Models /></Dark>} />
            <Route path='/parts' element={<Parts />} />
            <Route path='/model-parts' element={<ModelParts />} />
            <Route path='/model-details' element={<ModelDetails />} />
            <Route path='/models-carbon' element={<ModelsCarbon />} />

            <Route path="/shop" element={<Dark><Shop /></Dark>} />
            <Route path="/blog" element={<Dark><Blog /></Dark>} />
            <Route path="/partner" element={<Light><Partner /></Light>} />
            <Route path="/career" element={<Dark><Career /></Dark>} />
            <Route path="/privacy-policy" element={<Dark><PrivacyPolicy /></Dark>} />
            <Route path="/cookie-policy" element={<Dark><CookiePolicy /></Dark>} />
            <Route path="/impressum" element={<Dark><Impressum /></Dark>} />
            <Route path="*" element={<Dark><PageNotFound /></Dark>} />
        </Routes>
    )
}

export default RouteApi