import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";
import Card from "../Card/Card";
import "./navigationStyle.css"

function Navigation(){
    return (
        <Router>
            <div className="container__navigation">
                <div className="container__navigation-logo"></div>
                <ul className="container__navigation-nav-menu">
                    <li>
                        <NavLink exact to="/" activeClassName="active" className="static">Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/catalog" activeClassName="active" className="static">Catalog</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/card" activeClassName="active" className="static">Cards</NavLink>
                    </li>
                </ul>
                <div className="container__navigation-end"></div>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/card" element={<Card />} />
            </Routes>
        </Router>
    );
}

export default Navigation;
