import { Box, Container, Grid, Typography } from '@material-ui/core'
import React  from 'react'
import { useStyles } from './BodyStyles'

export default function Post() {
    const classes = useStyles();
    return (
        <Box className={classes.sectionDark} id="Services">
            <Grid container style=
                {{
                    display: "flex-center",
                    justifyContent: "center",
                    alignContent: "center",
                }}>
                <Grid item xs={10} sm={2} style={{ marginBottom: "40px" }}>
                    <Typography variant="h3"  >
                        Services
                    </Typography>
                </Grid>
            </Grid >
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item xs={2} sm={4} lg={6}>
                        <Box className={classes.imageContainer }>
                            <img src={"https://img1.wsimg.com/isteam/stock/10539/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300"}
                                alt="" className={classes.media}
                                title="Internet of Things" />
                            <Typography variant="h4" className={classes.Text} > Internet of Things </Typography>
                            <Typography className={classes.basement}>In today’s competitive economy, you need to consider forward-thinking possibilities
                                and utilize technology and innovation to your advantage. In order to drive productivity,
                                increase efficiencies and reduce costs you need to integrate all of your automation operations
                                to achieve the connected enterprise.. </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={2} sm={4} lg={6}>
                        <Box className={classes.imageContainer}>
                            <img src={"https://img1.wsimg.com/isteam/stock/6962/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300"}
                                alt="" className={classes.media} />
                            <Typography variant="h4" className={classes.Text}>Software Solutions</Typography>
                            <Typography className={classes.basement}>  Infobench Solutions offers world class application development solutions to many sectors </Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={2} sm={4} lg={6}>
                        <Box className={classes.imageContainer}>
                            <img src={"https://img1.wsimg.com/isteam/stock/lV5NoDp/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300"}
                                alt="" className={classes.media} />
                            <Typography variant="h4" className={classes.Text}>Industrial Automation</Typography>
                            <Typography className={classes.basement}>  Infobench utilizes its advanced engineering techniques to provide reliable industrial automation solutions with an eye to the next generation of manufacturing..</Typography>
                        </Box>

                    </Grid>
                    {/* <Grid item xs={2} sm={4} lg={6}>
         <Box className={classes.imageContainer}>
         <img src={"https://img1.wsimg.com/isteam/stock/6962/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300" }
            alt="" className={classes.media}
            />
             <Typography>Industrial Automation</Typography>    
         </Box>
         
         </Grid> */}
                </Grid>
            </Container>
        </Box>
    )
}
