import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import Wrapper from './components/layout/Wrapper';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import NotFound from './components/layout/NotFound';

import Main from './components/pages/Main';
import HotelList from './components/pages/HotelList';
import About from './components/pages/About';

function App() {
  return (
    <Fragment>
      <Wrapper>
        <Router>
          <div className="App">
            <Navigation />

            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/hotel-list" component={HotelList} />
              <Route path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>

          </div>
        </Router>
        <Footer />
      </Wrapper>
    </Fragment>
  );
}

export default App;
