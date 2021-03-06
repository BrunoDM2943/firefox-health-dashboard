import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import AndroidPage from './views/Android';
import JsTeam from './views/JsTeam';
import NimbledroidGraphPage from './views/NimbledroidGraph';
import Quantum from './quantum/Quantum';
import TP6 from './quantum/TP6';
import TP6M from './views/Android/TP6m';
import Subbenchmark from './quantum/subbenchmarks';

const NoMatch = () => <div>404</div>;
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/quantum/tp6" component={TP6} />
      <Route path="/quantum/tp6m" component={TP6M} />
      <Route path="/android/tp6m" component={TP6M} />
      <Route path="/android/graph" component={NimbledroidGraphPage} />
      <Route path="/android" component={AndroidPage} />
      <Route
        path="/quantum/:framework/:platform/:suite/:option"
        component={Subbenchmark}
      />
      <Route path="/quantum/:bits" component={Quantum} />
      <Route path="/js-team" component={JsTeam} />
      <Route path="/" component={Home} />
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>
);

Routes.propTypes = {
  location: PropTypes.object,
};

export default Routes;
