import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import About from './about';
import Contact from './contact';
import Login from './login';
import Signup from './signup';
// import MovieApp from '../movie/MovieApp';

//this all for the link in navbar
const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    {/* <Route path="./movie/MovieApp" component={MovieApp} /> */}
  </Switch>
)

export default Main;
