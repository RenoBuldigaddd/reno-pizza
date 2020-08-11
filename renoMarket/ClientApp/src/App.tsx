import * as React from "react";
import { Route } from "react-router";
import Layout from "./components/Layout";
import Counter from "./components/Counter";
import FetchData from "./components/FetchData";
import Home from "./components/HomePage/Home";
import Cart from "./components/CartPage/Cart";

import "./custom.css";

export default () => (
  <Layout>
    <Route exact path="/" component={Home} />
    <Route exact path="/cart" component={Cart} />
    <Route path="/counter" component={Counter} />
    <Route path="/fetch-data/:startDateIndex?" component={FetchData} />
  </Layout>
);
