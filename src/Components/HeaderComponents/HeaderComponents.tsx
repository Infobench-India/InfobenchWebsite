import React from 'react'
import { Box, Typography } from '@material-ui/core';
import { useStyles } from './HeaderStyles';
import Navbar from './Navbar';
// import ReactTypingEffect from 'react-typing-effect';
import Typed from 'react-typed';

export default function HeaderComponents() {
  const classes = useStyles();

  return (
    <Box className={classes.HeaderWrapper}>
      <Navbar />
      <Box className={classes.Headercontainer}>
        <Typography variant="h2" component="h3" className={classes.headerTitle}>
         <span style={{paddingRight:'5px'}}> </span>
          <Typed
      strings={[
         "Infobench ",  "Solutions"   ]}
       typeSpeed={30}
       backSpeed={50}
       loop
      />
        </Typography>
        <Typography variant="h4" component="h5" className={classes.headerDesc}>
         Industrial Automation  and  Software Solutions Provider
        {/* <span style={{paddingRight:'5px'}}> </span>
          <Typed
      strings={[
         " Industrial Automation ",
         "and",
         "Software Solutions Provider",
      ]}
       typeSpeed={10}
        backSpeed={20}
        loop
      /> */}
        </Typography>
        <Box className={classes.decorator}>
          <Typography variant="h4" className={classes.decoratorText}>
            | About Us |
          </Typography>

        </Box>
      </Box>
    </Box>

  );
};
