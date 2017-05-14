import React from 'react';
import ReactRouter, {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavContainer from '../containers/NavContainer';
import About from '../containers/About';
import Portfolio from '../containers/Portfolio';
import PortfolioItem from '../containers/PortfolioItem';
import Contact from './Contact';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavContainer />
          <Switch>
            <Route exact path="/" component={About}/>
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path="/portfolio/:value" component={PortfolioItem}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
