import * as React from "react";
import { Route } from "react-router";
import Layout from "./components/Layout";
import Products from "./components/ProductPage/Products";

import Cart from "./components/CartPage/Cart";
import Login from "./components/auth/Login";
import Register from "./components/auth/Signup";

import Profile from "./components/UserProfilePage/Profile";
import Home from "./components/HomePage/Home";

import "./custom.css";

export default () => (
  <Layout>
    <Route exact path="/" component={Home} />
    <Route exact path="/products" component={Products} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/signin" component={Login} />
    <Route exact path="/signup" component={Register} />
    <Route exact path="/profile" component={Profile} />
  </Layout>
);
