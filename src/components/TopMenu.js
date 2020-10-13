import React from 'react'
 import {makeStyles,AppBar,Toolbar,Typography,IconButton, MenuItem} from '@material-ui/core'
 import MenuIcon from '@material-ui/icons/Face'


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    appBar: {
        width: `calc(100%=${drawerWidth}px)`,
        marginLeft:drawerWidth,
    },
    menuButton:{
        marginRight: theme.spacing(2),
    },
    title:{
        flexGrow:1,
    },
}));

function TopMenu() {
    const classes = useStyles();
    return (
        <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
        <IconButton
        edge='start'
        className={classes.menuButton}
        color='inherit'
        aria-label = 'menu'
        >
        <MenuIcon />
        </IconButton>
        <MenuItem>
        <Typography variant='h6' className={classes.title}>
        Home
        </Typography>
        </MenuItem>
        <MenuItem>
        <Typography variant='h6' className={classes.title}>
        About
        </Typography>
        </MenuItem>
        </Toolbar>
        </AppBar>
    )
}

export default TopMenu
