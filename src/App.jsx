import React, { Component } from "react";
import Login from "./Login";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import CustomersList from "./CustomersList";
import NoMatch from "./NoMatch";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {window.location.pathname === "/" ? null : <NavBar />}
        <div className="container-fluid">
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/customersList" exact element={<CustomersList />} />
            <Route path="/shoppingcart" exact element={<ShoppingCart />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
