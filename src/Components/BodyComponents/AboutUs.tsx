import React from 'react'
import { Box, Grid, Container } from '@material-ui/core'
import { useStyles } from './BodyStyles'
import { RenderSectionHeading } from '../common/commonComponent';

export default function AboutUs() {
  const classes = useStyles();
  return (
    <Box className={classes.section} id="About">
      <Container>
        <Grid container spacing={1} >
          <Grid item sm={5} >
            <img src={"https://img1.wsimg.com/isteam/stock/ZO9zWA1/:/cr=t:11.54%25,l:0%25,w:100%25,h:76.93%25/rs=w:1240,h:620,cg:true"}
              alt="ABOUT US"
              className={classes.media} />
          </Grid>
          <Grid item xs={10} sm={6}>
            {RenderSectionHeading({
              heading: "About Us",
              alignCenter: "Center",
              description: "Infobench founded by technology professionals with a vision to provide high quality and cost effective solutions having deep domain knowledge in the fields of industrial automation, plant data reporting & analytics."
            })}
            <br />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
