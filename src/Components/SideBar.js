import React from 'react';
import {readMessage,addMessage,clearNotifications,status} from '../Redux/User/userActions'
import {connect} from 'react-redux'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Box,Button, Container } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:20
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function SideBar(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    props.status()
  };

  return (
    <div className={classes.root}>
        <Grid  container>
            <Box> <FormControlLabel
          control={<Switch checked={state.gilad} onChange={handleChange} name="gilad" />}
          label={props.isOnline?"Online":"Offline"}
        /> </Box>
        </Grid>
      <Grid container spacing={4} justify="center"   direction="row"
            justify="center"
             alignItems="center">
        
        <Grid item xs={12} lg={12}>
        <Box>
        <Paper className={classes.paper}>
            <Box>Total Messages</Box>
            <Box color="text.primary">
          <Typography variant="h2" component="h4" gutterBottom>
            {props.newMessages}
      </Typography></Box>
        </Paper>
        </Box>
        </Grid>        
        <Grid item xs={6} justify="end">
        <Button variant="contained" justify="center" color="secondary" onClick={props.addMessage}>
            Add a Message
        </Button>
        </Grid>
        <Grid item  xs={6} justify="end">
        <Button variant="contained" justify="center" color="secondary" onClick={props.readMessage}>
            Read a Message
        </Button>
        </Grid>
        <Grid item xs={12} lg={12}>
        <Box>
        <Paper className={classes.paper}>
            <Box>Total Notifications</Box>
            <Box color="text.primary">
          <Typography variant="h2" component="h4" gutterBottom>
            {props.newNotifications}
      </Typography></Box>
        </Paper>
        </Box>
        </Grid>        
        <Grid item xs={14} justify="end">
        <Button variant="outlined" justify="center" color="primary" onClick={props.clearNotifications}>
            Clear all Notifications
        </Button>
        </Grid>
 
     
      </Grid>
    </div>
  );
}
const mapStateToProps=(state)=>{
    return {
        newMessages:state.user.newMessages,
        newNotifications:state.user.newNotifications,
        isOnline:state.user.isOnline
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        readMessage:()=>dispatch(readMessage()),
        addMessage:()=>dispatch(addMessage()),
        clearNotifications:()=>dispatch(clearNotifications()),
        status:()=>dispatch(status())

    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SideBar)