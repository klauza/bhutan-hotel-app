import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';

// import Wrapper from './components/layout/Wrapper';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import NotFound from './components/layout/NotFound';

import Main from './components/pages/Main';
import Hotels from './components/pages/Hotels';
import HotelDetails from './components/pages/Hotels-children/HotelDetails';
import About from './components/pages/About';

function App() {
  return (
    <Fragment>
        <Router>
          <div className="App">
            <Navigation />

            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/hotel-list" component={Hotels} />
              <Route path="/about" component={About} />
              <Route path='/hotel/:id' component={HotelDetails} />
              <Route component={NotFound} />
            </Switch>

          </div>
        </Router>
        <Footer />
    </Fragment>
  );
}

export default App;
