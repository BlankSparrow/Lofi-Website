import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Category from './Category';
import Menu from './Options/Menu';

import Title from './svg/title.svg';
import './App.css';

/* Home component */
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

/* Products component */
const Products = () => (
  <div>
    <h2>Products</h2>
    <p>just some casual text</p>
    <p>just some casual text</p>
    <p>just some casual text</p>
    <p>just some casual text</p>
    <p>just some casual text</p>
    <p>just some casual text</p>
    <p>just some casual text</p>
    <p>just some casual text</p>
    <p>just some casual text</p>
    <p>just some casual text</p>
    <p>just some casual text</p>
    <p>just some casual text</p>
    <p>just some casual text</p>
    <p>just some casual text</p>
    <p>just some casual text</p>
    <p>just some casual text</p>
    <p>just some casual text</p>
    <p>just some casual text</p>
    <p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p><p>just some casual text</p>
  </div>
)

/* App component */
class App extends React.Component {
  render() {
    return (
      <div>
      
        <div className="page">
        
      <div className="content">
        <div className="bar"/>
        <nav className="navbar navbar-light">
          <div className="nav navbar-nav">

            <Link to="/">Homes</Link>
            <Link to="/category">Category</Link>
            <Link to="/products">Products</Link>

          </div>
         </nav>

        <Switch>
            <Route exact={true} path="/" component={Home}/>
            <Route path="/category" component={Category}/>
            <Route path="/products" component={Products}/>
        </Switch>
        <div className="bar"/>
        <div className="title">
            <img src={Title} alt="Title" />
        </div>
        </div>
      </div>
        <Menu />
        </div>
    )
  }
}

export default App;
