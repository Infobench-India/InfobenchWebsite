import { useStyles } from "../HeaderComponents/HeaderStyles"
import {Box,  Typography ,Grid } from '@material-ui/core';
import { useStyles  as BodyStyles} from "../BodyComponents/BodyStyles";



export const Decorator = ()  => {
    const classes = useStyles();
   return <Box className={classes.decorator}> </Box>
}
export const Divider =() => {
    const classes = BodyStyles();
    return <Typography component="span" className={classes.divider}></Typography>
    
}

export const RenderSectionHeading = ({heading , alignCenter, description}) => {
   const classes = BodyStyles();
   return <Box className={classes.sectionHeadingCont}>
   { Decorator({ withIcon:false, styles: alignCenter ? {width:"100px" , margin: "10px auto" } :{}})}
    <Typography 
    variant="h4" 
    align={alignCenter ? "center" : "left"} 
    className={classes.sectionHeading}>
     {heading}
     </Typography>
   { Divider()}
    <Typography 
    variant="body1" 
    component="h6" 
    align={alignCenter ? "center" : "left"}
     className={classes.sectionDesc}> 
     {description}
     </Typography>
    </Box>
  
};

export const CardMedia =(label, Icon) => {
   
  return <Grid container>
        <Grid item xs={4}>
      
        </Grid>
        <Grid item xs={8}>
            <Typography  variant="body1"  component="h6" gutterBottom>label</Typography>
         
        </Grid>
    </Grid>
    
}
