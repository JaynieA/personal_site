import React from 'react';
import ReactRouter, {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './Nav';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={About}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
