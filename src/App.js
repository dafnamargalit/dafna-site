import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Loader from 'react-loader-spinner';
import './App.css';
import StarrySky from './starrySky/StarrySky';
import Home from './home/Home';
import Dates from './dates/Dates';
import Apparel from './apparel/Apparel';
import Footage from './footage/Footage';
import News from './news/News';
import About from './about/About';
import Mail from './mail/Mail';

// // const Landing = React.lazy(() => import("../Landing"));
// // const NotFound = React.lazy(() => import("../NotFound"));
// const Home = React.lazy(() => import("./home/Home"));
// const Dates = React.lazy(() => import("./dates/Dates"));
// const Apparel = React.lazy(() => import("./apparel/Apparel"));
// const Footage = React.lazy(() => import("./footage/Footage"));
// const News = React.lazy(() => import("./news/News"));
// const About = React.lazy(() => import("./about/About"));
// const Mail = React.lazy(() => import("./mail/Mail"));

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {navbar: true}
  }

  render(){
  return (
  <React.Suspense fallback={
    <div className="App-Loader" id="App-Loader">
    <Loader 
    type="Audio"
    color="#ff73e3"
    height="100"	
    width="100"
    />   
    </div>
  }>
  <div className='App'>
  <StarrySky />
 <Router>
      <Switch>
      <Fragment>
      <div>
      <div className='content'>
        <Route exact path='/'component={Home}/>
        <Route exact path='/dates' component={Dates}/>
        <Route exact path='/apparel' component={Apparel}/>
        <Route exact path='/footage' component={Footage}/>
        <Route exact path='/news' component={News}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/mailing-list' component={Mail}/>
      </div>
      </div>
      </Fragment>
      </Switch>
      {/* <Route path='*' component={NotFound} /> */}
    </Router>
    </div>
</React.Suspense>
  );
  }
}


