import React from 'react'
import Appbar from '../Components/AppBar'
import { Container, Grid,Box } from '@material-ui/core';
import Posts from '../Components/Posts' 
import SideBar from '../Components/SideBar';



export default function Home() {
    return (
        <div>
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
    )
}
