import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import Vehicles from './containers/Vehicles/Vehicles';
import Vehicle from './containers/Vehicle/Vehicle';

const App = ({store}) => {
  return (
    <Provider store={store}>
      <Router>
        <Switch className="App">
          <Route exact path="/" component={Vehicles} />
          <Route path="/:id" component={Vehicle} />
        </Switch>
      </Router>
    </Provider>
  ); 
}

App.propTypes = {
  store: PropTypes.object.isRequired,
}

export default App;
