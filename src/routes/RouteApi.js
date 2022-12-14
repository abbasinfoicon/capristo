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

const RouteApi = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />


            <Route path="/car-list" element={<CarList />} />
            <Route path="/car" element={<Car />} />
            <Route path='/models' element={<Models />} />
            <Route path='/parts' element={<Parts />} />
            <Route path='/model-parts' element={<ModelParts />} />
            <Route path='/model-details' element={<ModelDetails />} />
            <Route path='/models-carbon' element={<ModelsCarbon />} />

            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/career" element={<Career />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default RouteApi