import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      '& > *': {
        margin: theme.spacing(4),
      },
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
    },
  }));

function HeaderContainer(){
    const classes = useStyles();
    return(
        <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
            Movie Genie
            </Typography>
            <Button component={Link} to="/" className={classes.menuButton} variant="contained" color="primary">Home</Button>
            <Button component={Link} to="/movie" className={classes.menuButton} variant="contained" color="primary">Movie</Button>
        </Toolbar>
        </AppBar>
    );
}


export default HeaderContainer;