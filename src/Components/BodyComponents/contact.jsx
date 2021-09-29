import React, { useState } from 'react'
import { Box, Grid,Container, Typography,Button } from '@material-ui/core'
import { useStyles } from './BodyStyles'
import {RenderInputText} from '../common/formComponent';
// import { RenderInputText } from '../common/commonComponent';





export default function Contact() {
 const classes = useStyles();
 const [state, setState] = useState({
     data:{
     firstname: "",
     email: "",
     messages: "",
     },
    
 });

 const handleOnChange = ({target}) => {
     const {data, } = state;
     data[target.name] = target.value
     setState({data})
    
 };
const handleSubmit = (e) => {
  e.preventDefault()
  console.log("submitted", state.data);
 }

return (
     <Box className={classes.section} id="Contact">
         <Container>
     <Grid container spacing={10} >
     <Grid item xs={12} sm={7}>
     <Typography variant="h4">
         Contact Us
     </Typography>
     <br />
      <form onSubmit={handleSubmit}>
          <Grid container  
           direction="row"
           justify="center"
           alignItems="center"  
           >
          <Grid item xs={12} sm={10} style={{marginBottom: "16px"}}>
          {RenderInputText({
              label: "First Name",
               name:"firstname",
               state: state,
               onChange: handleOnChange,

               })}
          </Grid>
          <Grid item xs={12} sm={10} style={{marginBottom: "16px"}}>
          {RenderInputText({
              label: "E-mail",
               name:"email",
               state: state,
               onChange: handleOnChange,
               })}
          </Grid>
          <Grid item xs={12} sm={10} style={{marginBottom: "16px"}}>
          {RenderInputText({
              label: "Messages",
              name:"messages",
              state: state,
              onChange: handleOnChange,
              multiline: true,
              rows: "5",
              })}
          </Grid>
          <Grid item xs={12} sm={8} style={{marginBottom: "16px"}}>
              <Button variant="outlined" type="submit" fullWidth={true} className={classes.submitBtn}>
                  Submit
              </Button>
          </Grid>
          </Grid>
      </form>

      
    </Grid>
    
    </Grid>
    </Container>
        </Box>
    )
}