import React from 'react'
import {Formik,Form,Field,ErrorMessage,FieldArray} from 'formik'
import InputError from '../Components/InputError'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import * as Yup from 'yup'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",

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


const initialValues={
    name:'',
    email:'',
    channel:'',
    address:'',
    social:{
        facebook:'',
        instagram:''
    },
    tags:['']
}

const validationSchema=Yup.object({
    name:Yup.string().required('Required'),
    email:Yup.string().email("Please provide a proper format").required('Required'),
    channel:Yup.string().required('Required'),
    address:Yup.string().required('Required')
})

const onSubmit=(values)=>{
    console.log("Submitted values",values)
}

export default function YoutubeForm() {
    const classes = useStyles();
    
    // const formik = useFormik({
    //     initialValues,
    //     onSubmit:values=>{
    //         console.log("submitted",values)
    //     },
    //     validationSchema
    // })
    // console.log('formik-touched',formik.touched)
    // console.log(formik.errors)


    return (
        <div className={classes.main}>
            <h1>Youtube Form</h1>

                {/* Without using formik method */}

            {/* <form className={classes.root} noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
                <div>
                <TextField 
                    id="name"
                    type="text" 
                    name="name" 
                    label="Your Full Name" 
                    variant="outlined"
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    />
                    {formik.touched.name && formik.errors.name ? (
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
                    onBlur={formik.handleBlur}
                    value={formik.values.values}
                    onChange={formik.handleChange}
                     />
                     {formik.touched.email && formik.errors.email ? (
                     <Alert severity="error">{formik.errors.email}</Alert>

                    ):(null)}
                </div>
                <div>
                <TextField 
                    type="text" 
                    id="channel" 
                    label="Channel Name" 
                    variant="outlined"
                    onBlur={formik.handleBlur}
                    name="channel"
                    value={formik.values.channel}
                    onChange={formik.handleChange} />
                    {formik.touched.channel && formik.errors.channel ? (
                     <Alert severity="error">{formik.errors.channel}</Alert>
                    ):(null)}
                
                </div>
                <Button type="submit"  variant="contained" color="secondary" fullWidth={true} >Submit</Button>   
                </form> */}

<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
    
            <Form className={classes.root} noValidate autoComplete="off">
                <div>
                <Field 
                    id="name"
                    type="text" 
                    name="name" 
                    placeholder="Name"
                    />
                    <ErrorMessage name='name' />

                </div>
                <div>
                <Field 
                    type="email"
                    id="email" 
                    name="email"
                placeholder="email"
/>
                    <ErrorMessage name='email' component={InputError} />
                </div>
                <div>
                <Field 
                    type="text" 
                    id="channel" 
                    name="channel"
                    placeholder="Youtube Channel Name"
                 />
                <ErrorMessage name='channel' >
                    {(mssg)=>(
                     <Alert severity="error">{mssg}</Alert>
                    )}
                </ErrorMessage>
                
                </div>
                <div>
                    <Field name="address">
                        {(props)=>{
                            console.log(props)
                            const {field,form,meta}=props
                            return(
                                <div>
                                <TextField 
                                type="text" 
                                id="address" 
                                label="address" 
                                variant="outlined"
                                {...field}
                                />
                                {meta.touched && meta.error ? (
                                <Alert severity="error">{meta.error}</Alert>
                                ):(null)}
                                </div>
                            )
                        }}
                    </Field>
                </div>
                <div>
                    <Field name="social.facebook">
                        {(props)=>{
                            console.log(props)
                            const {field,form,meta}=props
                            return(
                                <div>
                                <TextField 
                                type="text" 
                                id="facebook" 
                                label="facebook profile" 
                                variant="outlined"
                                {...field}
                                />
                                {meta.touched && meta.error ? (
                                <Alert severity="error">{meta.error}</Alert>
                                ):(null)}
                                </div>
                            )
                        }}
                    </Field>
                </div>

                <div>
                    <Field name="social.instagram">
                        {(props)=>{
                            console.log(props)
                            const {field,form,meta}=props
                            return(
                                <div>
                                <TextField 
                                type="text" 
                                id="instagram" 
                                label="instagram profile" 
                                variant="outlined"
                                {...field}
                                />
                                {meta.touched && meta.error ? (
                                <Alert severity="error">{meta.error}</Alert>
                                ):(null)}
                                </div>
                            )
                        }}
                    </Field>
                </div>
                <div>
                        <h4>Add tags</h4>
                        <FieldArray name="tags">
                            {
                                fieldArrayProps=>{
                                    console.log(fieldArrayProps)
                                    const {push,remove,form}=fieldArrayProps
                                    const {tags} = form.values
                                    return(
                                        <div>
                                        {
                                            tags.map((item,index)=>(
                                                <div key={index}>
                                                    <Field name={`item[${index}]`}>
                                                    </Field>
                                                    <Button onClick={()=>push('')}>+</Button>
                                                         <Button  onClick={(index)=>remove(index)}>-</Button>
                                                </div>
                                            ))
                                        }
                                        </div>

                                    )
                                }
                            }
                        </FieldArray>
                </div>
                
                <Button type="submit"  variant="contained" color="secondary" fullWidth={true} >Submit</Button>   
                </Form>


</Formik>

        </div>
    )
}
