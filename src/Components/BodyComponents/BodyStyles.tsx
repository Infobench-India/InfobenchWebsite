import { makeStyles } from "@material-ui/core";
import { Theme } from "../Theme";

 export const useStyles = makeStyles((theme) =>({
   section:{
       backgroundColor:Theme.colors.primary,
       padding:theme.spacing(8,0,8,0),
   },
   sectionDark:{
    backgroundColor:Theme.colors.primary1,
    padding:theme.spacing(5),
    
},
   divider:{
       width: "65px",
       height:"4px",
       backgroundColor: Theme.colors.base2,
       margin:theme.spacing(2,0),
   },
  
   media:{
       width:"100%",
       height:"auto",
   },
   sectionHeadingCont:{
   Top:100,
    color: Theme.colors.base2,

   },
   sectionHeading:{
    color: Theme.colors.base2,
    margin: theme.spacing(4,3),
   },
   form:{
    padding: theme.spacing(5),
},
item:{
     marginBottom:  "16px",
},
button:{
  
   marginLeft: 225,
 
},
imageContainer:{
    
},

footerContainer:{
 backgroundColor: "Black",
 color:Theme.colors.base2,
 padding:theme.spacing(2),
 position: "relative",
},
iconButton:{
    position: "absolute",
    bottom:40,
    right:40,
    height:75,
    width:75,
    backgroundColor:Theme.colors.primary,
    color:Theme.colors.base2,
},
Text:{
    color:Theme.colors.base2,
     
},
basement:{
    color:Theme.colors.base2,
},

fab:{
    position:"fixed",
    bottom:40,
    right:40,
    height:75,
    width:75
},
container:{
    width:500,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left:0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]:{
        width: "100vw",
        height:"100vh",
    },
},
toolbar:{
    display:"flex",
    justifyContent:"space-between"

    },
 logoLg:{
    display: "flex",
  [  theme.breakpoints.up("sm")]:{
    display: "block",
  },
},
 form1:{
     padding: theme.spacing(10),

 },
 item1:{
     marginBottom: theme.spacing(3),
 },
 submitBtn:{
   backgroundColor:Theme.colors.base2,
   color:Theme.colors.base1,
 },

}));