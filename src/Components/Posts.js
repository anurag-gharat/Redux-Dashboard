import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {fetchData} from '../Redux/Posts/postActions'
import Card from './Card'
import { Container, Grid, Typography } from '@material-ui/core'

function Posts({fetchData,postsData,loading,error}) {
   
    useEffect(()=>{
        fetchData()
    },[])
    return loading?(
        <div>
            loading
            
        </div>
    ):
    (postsData?(
        <Container spacing={3}>
            <Grid container >
                <Typography variant="h2" component="h4" gutterBottom>
                    TOP POSTS
                </Typography>
            </Grid>
        {postsData.map(item=>(
             <Card item={item} key={item.id} />
            ))}
        </Container>
    ):(<h2>no POsts available</h2>))
}
const mapStateToProps=(state)=>{
    return{
        postsData:state.posts.posts,
        loading:state.posts.loading,
        error:state.posts.error

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchData())
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Posts)