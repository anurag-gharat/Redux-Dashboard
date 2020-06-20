import React from 'react'
import {useFormik} from 'formik'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      display:"flex",
      flexDirection:"column",
      justifyContent:"center"
    },
  },
  main:{
      display:"flex",
      justifyContent:"center",
      paddingTop:100,
      flexDirection:"column",
      alignItems:"center"
  }
}));
export default function YoutubeForm() {
    const classes = useStyles();
    
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            channel:''
        },
        onSubmit:values=>{
            console.log("submitted",values)
        },
        validate:values=>{
            var errors={
            }
            if(!values.name){
                formik.errors.name='Required'
            }
            if(!values.email){
                formik.errors.email='Required'
            }
            if(!values.channel){
                formik.errors.channel="Required"
            }
            return errors
        }


    })
    console.log(formik.errors)
    return (
        <div className={classes.main}>
            <h1>Youtube Form</h1>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
                <div>
                <TextField 
                    id="name"
                    type="text" 
                    name="name" 
                    label="Your Full Name" 
                    variant="outlined"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    />
                    {formik.errors.name ? (
                     <Alert severity="error">{formik.errors.name}</Alert>

                    ):(null)}
                </div>
                <div>
                <TextField 
                    type="email"
                    id="email" 
                    label="Email Address" 
                    variant="outlined"
                    name="email"
                    value={formik.values.values}
                    onChange={formik.handleChange}
                     />
                     {formik.errors.email ? (
                     <Alert severity="error">{formik.errors.email}</Alert>

                    ):(null)}
                </div>
                <div>
                <TextField 
                    type="text" 
                    id="channel" 
                    label="Channel Name" 
                    variant="outlined"
                    name="channel"
                    value={formik.values.channel}
                    onChange={formik.handleChange} />
                    {formik.errors.channel ? (
                     <Alert severity="error">{formik.errors.channel}</Alert>

                    ):(null)}
                
                </div>
                <Button type="submit"  variant="contained" color="secondary" fullWidth={true} >Submit</Button>   
                </form>
        </div>
    )
}
