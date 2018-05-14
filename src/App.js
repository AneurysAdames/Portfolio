import React, {Component, Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/experience' component={Experience} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
