import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pageComponents/Home';
import Rooms from './components/pageComponents/Rooms';
import SingleRoom from './components/pageComponents/SingleRoom';
import ErrorPage from './components/pageComponents/ErrorPage';
import NavBar from './components/NavBar'

function App() {
    return (
    <div className="App">
        <Router>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/rooms" component={Rooms} />
            <Route exact path="/rooms/:type" component={SingleRoom} />
            <Route component={ErrorPage} />
            </Switch>
      </Router>
    </div>
  );
}

export default App;
