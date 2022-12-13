import React from 'react'
import { Route, Routes } from "react-router-dom"
import About from '../views/pages/About'
import Blog from '../views/pages/Blog'
import Car from '../views/pages/Car'
import Career from '../views/pages/Career'
import CarList from '../views/pages/CarList'
import Contact from '../views/pages/Contact'
import CookiePolicy from '../views/pages/CookiePolicy'
import Home from '../views/pages/Home'
import Impressum from '../views/pages/Impressum'
import Models from '../views/pages/Models'
import ModelParts from '../views/pages/ModelParts'
import PageNotFound from '../views/pages/PageNotFound'
import Partner from '../views/pages/Partner'
import PrivacyPolicy from '../views/pages/PrivacyPolicy'
import Shop from '../views/pages/Shop'
import ModelDetails from '../views/pages/ModelDetails'
import ModelsCarbon from '../views/pages/ModelsCarbon'
import Parts from '../views/pages/Parts'

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