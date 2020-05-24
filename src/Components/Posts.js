import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {fetchData} from '../Redux/Posts/postActions'
import Card from './Card'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {addPost} from '../Redux/Posts/postActions'
import { Container, Grid, Typography, Paper } from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(4),
        width: '75ch',
      },
    },
    paper:{
        marginBottom:"20px"
    },
    text:{
        margin:"10px",
        marginLeft:"35px"
    }
  }));




function Posts({fetchData,postsData,loading,error,addPost}) {
    const classes = useStyles();
    
    useEffect(()=>{
        fetchData()
    },[])
    
    const [values,setValues]=useState({
        title:"",
        content:""
    })
    const {title,content}=values
    const onSubmit=(e)=>{
        e.preventDefult()
        addPost({title,content})
        
    }


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
            
            <Paper className={classes.paper} >
            <Grid container fullWidth={true}>
            <Typography variant="h5" component="h5" gutterBottom className={classes.text}>
                    New Post
                </Typography>
            <form className={classes.root} noValidate autoComplete="off">
                <Grid item xs={12} xl={12} md={12} lg={12}>
                <TextField id="standard-basic" label="Title" fullWidth={true} />
                </Grid>
                <Grid item  xs={12} lg={12}>
                <TextField id="standard-basic" label="Content" multiline rowsMax={6} fullWidth={true}/>

            </Grid>
            <Grid item xs={12} >
            <Button variant="contained" color="primary" >
            Add 
</Button>
            </Grid>
         


    </form>
            </Grid>
            </Paper>
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
        fetchData: () => dispatch(fetchData()),
        addPost:()=>dispatch(addPost())
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Posts)