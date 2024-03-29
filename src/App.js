import React, { Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

// redux
import { Provider } from 'react-redux';
import store from './store';

// styles
import './App.scss';
import './App.css';
import 'leaflet/dist/leaflet.css';

// layout
import Nav from './components/layout/Navigation/Nav';
import NotFound from './components/layout/NotFound';
import Footer from './components/layout/Footer';

// pages
import Main from './components/pages/Main';
import Hotels from './components/pages/Hotels';
import HotelDetails from './components/pages/Hotels-children/HotelDetails';
import HotelReservation from './components/pages/Hotels-children/HotelReservation';
import Account from './components/pages/Account';
import Contact from './components/pages/Contact';
import GuideDetails from './components/pages/Guide-children/GuideDetails';
import Alert from './components/layout/Alert';
import Hiring from './components/pages/Hiring';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Router history={history}>
          <div className="App">
            <Nav />
            <Alert />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/apartment-list" component={Hotels} />
              <Route path="/contact" component={Contact} />
              <Route path="/apartment/:id" component={HotelDetails} />
              <Route path="/reservation" component={HotelReservation} />
              <Route path="/account" component={Account} />
              <Route path="/hiring/:name" component={GuideDetails} />
              <Route path="/hiring" component={Hiring} />

              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </Fragment>
    </Provider>
  );
}

export default App;
