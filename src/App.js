import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Loader from 'react-loader-spinner';

import './App.css';
import StarrySky from './starrySky/StarrySky';
import Navbar from './navbar/Navbar';

// const Landing = React.lazy(() => import("../Landing"));
// const NotFound = React.lazy(() => import("../NotFound"));
const Home = React.lazy(() => import("./home/Home"));
const Dates = React.lazy(() => import("./dates/Dates"));
const About = React.lazy(() => import("./about/About"));
const Footage = React.lazy(() => import("./footage/Footage"));
const News = React.lazy(() => import("./news/News"));
const Ask = React.lazy(() => import("./ask/Ask"));

export default class App extends Component {

  render(){
  return (
  <React.Suspense fallback={
    <div className="App-Loader" id="App-Loader">
    <Loader 
    type="Audio"
    color="#f7d5e8"
    height="100"	
    width="100"
 />   
</div>
}>
 <Router>
      <div className='App'>
      <StarrySky />
      <div className='navbar-header'>
        <Navbar/>
      </div>
      <div className='content'>
      <Route exact path='/' component={Home}/>
      <Route exact path='/dates' component={Dates}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/footage' component={Footage}/>
      <Route exact path='/news' component={News}/>
      <Route exact path='/ask' component={Ask}/>
      </div>
      {/* <Route path='/home' component={Home}/> */}
      {/* <Route path='*' component={NotFound} /> */}
      </div>
    </Router>
</React.Suspense>
  );
  }
}


