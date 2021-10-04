import React from 'react'
import {Box, Typography } from '@material-ui/core';
import { useStyles } from './HeaderStyles';
import Navbar from './Navbar';
//  import DrawerComponent from '..HeaderComponents/DrawerComponent';
//  import { useState } from 'react';
//  import {Link} from "react-scroll";

export default function HeaderComponents() {
    const classes = useStyles();
    // const [initialState, setInitialState]= useState(false);
    
    //  const  handleDrawerToggler = () => {
    //     setInitialState(!initialState);
    //  }
   

    // const navlinks = [
    //   {label: "About", id: "About"},
    //   {label: "Services" , id: "Services"},
    //   {label: "Contact",  id: "Contact"},
    //   {label: "Footer",  id: "Footer"},
    // ];

    return (
        <Box className={classes.HeaderWrapper }>
        <Navbar />
         {/* navlinks={navlinks} handleDrawerToggler={handleDrawerToggler}  */}
          {/* <DrawerComponent initialState={initialState} navlinks={navlinks} handleDrawerToggler={handleDrawerToggler} />   */}
        <Box className={classes.Headercontainer}>
        <Typography variant="h2" component="h3"  className={classes.headerTitle}>
          Infobench Solutions
        </Typography>
           {/* <Box>
          {navlinks.map((item, i) =>(
            <Button key={i} className={classes.navlinks}
             activeClass="active"
             to={`${item.id}`}
             spy={true}
             smooth={true}
             offset={-70}
             duration={500}
             color='inherit'
             component={Link}
            >
               {item.label}
            </Button>
          ) 
          )}
        </Box>    */}
        <Typography variant="h4" component="h5"  className={classes.headerDesc}>
        Industrial Automation and Software Solution Provider
        </Typography>
        <Box className={classes.decorator}>
         <Typography  variant="h4" className={classes.decoratorText}>
            | About Us |
       </Typography>
     
   </Box>
 </Box>
 </Box>
    
 );
};
