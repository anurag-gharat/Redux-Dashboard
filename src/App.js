import React from 'react';
import Posts from './components/Posts'
import Postsform from './components/Postsform'
import './App.css';
import { Provider } from 'react-redux'
import store from './Store'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Postsform />
      <Posts />
    </div>
    </Provider>
  );
}

export default App;
