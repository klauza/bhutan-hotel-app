import React, {Fragment} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import history from './history';

// redux
import { Provider } from 'react-redux';
import store from './store';

// styles
import './App.scss';
import 'leaflet/dist/leaflet.css';

// layout
// import Navigation from './components/layout/Navigation';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import NotFound from './components/layout/NotFound';

// pages
import Main from './components/pages/Main';
import Hotels from './components/pages/Hotels';
import HotelDetails from './components/pages/Hotels-children/HotelDetails';
import HotelReservation from './components/pages/Hotels-children/HotelReservation';
import Contact from './components/pages/Contact';
import Guides from './components/pages/Guides';
import GuideDetails from './components/pages/Guide-children/GuideDetails';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
          <Router history={history}>
            <div className="App">
              <Nav />

              <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/hotel-list" component={Hotels} />
                <Route path="/contact" component={Contact} />
                <Route path='/hotel/:id' component={HotelDetails} />
                <Route path='/reservation' component={HotelReservation} />
                <Route path='/guides' component={Guides} />
                <Route path='/guide/:name' component={GuideDetails} />

                <Route component={NotFound} />
              </Switch>

            </div>
            {/* <Footer /> */}
          </Router>
      </Fragment>
    </Provider>
  );
}

export default App;
