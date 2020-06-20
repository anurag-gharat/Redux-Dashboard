import React, { Component } from 'react';
import {Provider} from 'react-redux'
import store from './Redux/Store'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Home from './Pages/Home';
import YoutubeForm from './Pages/YoutubeForm';


class App extends Component {
  render() {
    return (<Provider store={store} >
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} ></Route>
            <Route path="/youtube" component={YoutubeForm} ></Route>

          </Switch>
        </Router>
      </div>
      </Provider>
    );
  }
}

export default App;