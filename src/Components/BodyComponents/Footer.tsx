import React from 'react'
import { AppBar, Button, Container, Fab, Modal, TextField, Toolbar, Typography, Box } from '@material-ui/core'
import { useStyles } from './BodyStyles'
import { ChatTwoTone } from "@material-ui/icons";
import { useState } from "react";



export default function Footer() {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    return (
        <Box className={classes.footerContainer} id="Footer">
            <Typography title="Help!" aria-label="ChatTwoTone" onClick={() => setOpen(true)}>
                <Fab color="primary" className={classes.fab}>
                    <ChatTwoTone />
                </Fab>
            </Typography>
            <Modal open={open}>
                <Container className={classes.container}>
                    <form className={classes.form1} autoComplete="off">
                        <div className={classes.item}>
                            <AppBar position="absolute">
                                <Toolbar className={classes.toolbar}>
                                    <Typography variant="h6" className={classes.logoLg}>
                                        Infobench Solutions LLP
                                    </Typography>
                                </Toolbar>
                            </AppBar>
                            <TextField
                                id="outlined-basic"
                                label="Enter your Name"
                                variant="outlined"
                                size="medium"
                                style={{ width: "100%" }}
                            />
                        </div>
                        <div className={classes.item1}>
                            <TextField
                                id="outlined-basic"
                                label="Enter your Email Id"
                                variant="outlined"
                                size="medium"
                                style={{ width: "100%" }}
                            />
                        </div>
                        <div className={classes.item1}>
                            <TextField
                                id="outlined-basic"
                                multiline
                                rows={4}
                                label="How Can We Help You"
                                variant="outlined"
                                size="medium"
                                style={{ width: "100%" }}
                            />
                        </div>
                        <div className={classes.item1}>
                            <Button variant="outlined" color="primary"
                                style={{ marginRight: 20 }}
                                onClick={() => setOpen(true)}>
                                Send
                            </Button>

                            <Button variant="outlined" color="secondary" onClick={() => setOpen(false)}>
                                Close
                            </Button>
                        </div>
                    </form>
                </Container>
            </Modal>
            <Typography
                variant="body1"

                align="center"
                color="inherit"
            >
                <Typography variant='h6'> This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</Typography>

                <Typography variant='h6'>  We look forward to a wonderful relationship together and success for all concerned.</Typography>

                <Typography variant='h6'>  Pune, Maharashtra, India   </Typography>
            </Typography>
        </Box>

    )

}