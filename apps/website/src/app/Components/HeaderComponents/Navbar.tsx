import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box } from '@material-ui/core';
import { useStyles } from './HeaderStyles';
import { Link } from "react-scroll";



export default function Navbar() {
  const classes = useStyles();

  const navlinks = [
    { label: "About", id: "About" },
    { label: "Services", id: "Services" },
    { label: "Contact", id: "Contact" },
    { label: "Customer", id: "Customer" },
    { label: "Footer", id: "Footer" },
  ];


  return (
    <AppBar position="fixed" className={classes.navbar}>
      <Toolbar className={classes.Toolbar}>
        <Typography>
          <img src="https://img1.wsimg.com/isteam/ip/31cd2b32-860a-4d43-88ae-329daf026e10/NLogo.png/:/rs=h:138/ll"
            alt="logo"
            height={80}
            width={150}
          />
        </Typography>
        <Typography variant="h5" component="h6" >
          Infobench Solutions
        </Typography>
      
        <Box>
          {navlinks.map((item: any, i: any) => (
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
        </Box>
      </Toolbar>
    </AppBar>
  );
}

