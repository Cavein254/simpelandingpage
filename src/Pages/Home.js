import React from 'react'
import Footer from '../components/Footer'
import MainContent from '../components/MainContent'
import SideMenu from '../components/SideMenu'
import {makeStyles} from '@material-ui/core/styles'
import TopMenu from '../components/TopMenu'


const useStyles = makeStyles(theme => ({
    root: {
        display:'flex'
    },
}));


function Home() {
    const classes = useStyles();
    return(
        <div className={classes.root}>
        <TopMenu />
        <SideMenu />
        <MainContent />
        <Footer />
        </div>
    )
}

export default Home
