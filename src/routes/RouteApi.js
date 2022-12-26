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
import ExhaustsModels from '../views/ExhaustsModels'
import PageNotFound from '../views/PageNotFound'
import Partner from '../views/Partner'
import PrivacyPolicy from '../views/PrivacyPolicy'
import Shop from '../views/Shop'
import Dark from '../layouts/Dark'
import Light from '../layouts/Light'
import ExhaustCarDetails from '../views/ExhaustCarDetails'
import ExhaustCarParts from '../views/ExhaustCarParts'
import ExhaustCarPartsDetails from '../views/ExhaustCarPartsDetails'
import CareerDetails from '../views/CareerDetails'

const RouteApi = () => {

    return (
        <Routes>
            <Route exact path="/" element={<Light><Home /></Light>} />
            <Route exact path="/about" element={<Dark><About /></Dark>} />
            <Route exact path="/contact" element={<Light><Contact /></Light>} />

            <Route exact path="/car-list" element={<Dark><CarList /></Dark>} />
            <Route exact path="/:slug" element={<Light><Car /></Light>} />

            <Route exact path='/:slug/:slugExhausts' element={<Dark><ExhaustsModels /></Dark>} />
            <Route exact path='/:slug/:slugExhausts/:name' element={<Dark><ExhaustCarDetails /></Dark>} />
            <Route exact path='/:slug/:slugExhausts/:name/:part' element={<Dark><ExhaustCarParts /></Dark>} />
            <Route exact path='/:slug/:slugExhausts/:name/:part/:partName' element={<Dark><ExhaustCarPartsDetails /></Dark>} />


            <Route exact path="/shop" element={<Dark><Shop /></Dark>} />
            <Route exact path="/blog" element={<Dark><Blog /></Dark>} />
            <Route exact path="/partner" element={<Light><Partner /></Light>} />

            <Route exact path="/career" element={<Dark><Career /></Dark>} />
            <Route exact path="/career/:details" element={<Dark><CareerDetails /></Dark>} />

            <Route exact path="/privacy-policy" element={<Dark><PrivacyPolicy /></Dark>} />
            <Route exact path="/cookie-policy" element={<Dark><CookiePolicy /></Dark>} />
            <Route exact path="/impressum" element={<Dark><Impressum /></Dark>} />
            <Route path="*" element={<Dark><PageNotFound /></Dark>} />
        </Routes>
    )
}

export default RouteApi