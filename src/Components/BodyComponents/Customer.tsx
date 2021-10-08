import { Box, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from './BodyStyles'

export default function Post() {
    const classes = useStyles();

    return (
        <Box className={classes.sectionWhite} id="Customer">
             <Grid container style=
                {{
                    display: "flex-center",
                    justifyContent: "center",
                    alignContent: "center",
                }}>  
                <Grid item  sm={3} style={{ marginBottom: "70px" }}>
                    <Typography variant="h3" >
                        Happy  Customers  
                    </Typography>
                </Grid>
            </Grid >
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid item sm={2} >
                        <Box >
                            <img src={"https://img1.wsimg.com/isteam/ip/31cd2b32-860a-4d43-88ae-329daf026e10/LG.png/:/rs=h:100"}
                                alt="" className={classes.media1}
                             />
                        </Box>
                    </Grid>
                    <Grid item sm={2} >
                        <Box >
                            <img src={"https://img1.wsimg.com/isteam/ip/31cd2b32-860a-4d43-88ae-329daf026e10/vw.jpg/:/rs=h:100"}
                                alt="" className={classes.media1} />
                        </Box>
                    </Grid>
                    <Grid item  sm={2}>
                        <Box >
                            <img src={"https://img1.wsimg.com/isteam/ip/31cd2b32-860a-4d43-88ae-329daf026e10/Cummins-0001.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100"}
                                alt="" className={classes.media1} />
                        </Box>
                    </Grid>
                    <Grid item sm={2}>
                        <Box >
                            <img src={"https://img1.wsimg.com/isteam/ip/31cd2b32-860a-4d43-88ae-329daf026e10/cipla.jpg/:/rs=h:100"}
                                alt="" className={classes.media1}
                            />
                        </Box>
                    </Grid>
                    <Grid item   sm={2} >
                        <Box >
                            <img src={"https://img1.wsimg.com/isteam/ip/31cd2b32-860a-4d43-88ae-329daf026e10/Serum-Institute.jpg/:/rs=h:100"}
                                alt="" className={classes.media1}
                            />
                        </Box>
                    </Grid>
                    <Grid item sm={2}>
                        <Box >
                            <img src={"https://img1.wsimg.com/isteam/ip/31cd2b32-860a-4d43-88ae-329daf026e10/bajaj.jpg/:/rs=h:100"}
                                alt="" className={classes.media1}
                            />
                        </Box>
                    </Grid>
                    <Grid item sm={2}>
                        <Box >
                            <img src={"https://img1.wsimg.com/isteam/ip/31cd2b32-860a-4d43-88ae-329daf026e10/saint%20gobain.png/:/rs=h:100"}
                                alt="" className={classes.media1}
                            />
                        </Box>
                    </Grid>
                    <Grid item sm={2}>
                        <Box >
                            <img src={"https://img1.wsimg.com/isteam/ip/31cd2b32-860a-4d43-88ae-329daf026e10/neosym.jpg/:/rs=h:100"}
                                alt="" className={classes.media1}
                            />
                        </Box>
                    </Grid>
                    <Grid item sm={2}>
                        <Box >
                            <img src={"https://img1.wsimg.com/isteam/ip/31cd2b32-860a-4d43-88ae-329daf026e10/panchshil.png/:/rs=h:100"}
                                alt="" className={classes.media1}
                            />
                        </Box>
                    </Grid>
                    <Grid item sm={2}>
                        <Box >
                            <img src={"https://img1.wsimg.com/isteam/ip/31cd2b32-860a-4d43-88ae-329daf026e10/varroc.jpg/:/rs=h:100"}
                                alt="" className={classes.media1}
                            />
                        </Box>
                    </Grid>
                    <Grid item sm={1}>
                        <Box >
                            <img src={"https://img1.wsimg.com/isteam/ip/31cd2b32-860a-4d43-88ae-329daf026e10/thermax%20n.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100"}
                                alt="" className={classes.media1}
                            />
                        </Box>
                    </Grid>
                    <Grid item sm={2}>
                        <Box >
                            <img src={"https://img1.wsimg.com/isteam/ip/31cd2b32-860a-4d43-88ae-329daf026e10/chenghua.png/:/rs=h:100"}
                                alt="" className={classes.media1}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
