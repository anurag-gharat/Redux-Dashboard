import React, { Component } from 'react';
import {Provider} from 'react-redux'
import store from './Redux/Store'
import Appbar from './Components/AppBar'
import { Container, Grid,Box } from '@material-ui/core';
import Posts from './Components/Posts' 
import SideBar from './Components/SideBar';


class App extends Component {
  render() {
    return (<Provider store={store} >
      <div className="App">
        <Appbar />
        <Container >
      <Grid container spacing={2} >
        <Grid item xs={12} lg={8}  >
            <Posts />
        </Grid>
        <Grid item xs={12} lg={4} >
          <SideBar />
        </Grid>

      </Grid>

        </Container>
      </div>
      </Provider>
    );
  }
}

export default App;