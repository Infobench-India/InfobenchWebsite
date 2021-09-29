 import { makeStyles, TextField } from "@material-ui/core";
import { Theme } from "../Theme";

 const useStyles = makeStyles(() => ({

    cssLabel:{
    color: "#d3d3d3",
    "&.Mui-focused":{
        color: Theme.colors.primary,
    },

    },


    cssOutlinedInput:{  
        "&:not(hover):not($disabled):not($cssFocused):not($error) $notchedOutline":
        {
        borderColor: Theme.colors.base2,
        opacity: 0.5,
    },
},
"&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline":{
    opacity: 1,
    borderColor: Theme.colors.base2,
},
 "&$cssFocused $notchedOutline": {
    borderColor: Theme.colors.primary,
    color: Theme.colors.primary,
 },
 }))


export const RenderInputText =({name, label, state, onChange , multiline, rows} ) => {
    const{ data} = state;
    const classes = useStyles();
    return  (
    <TextField  
    InputLabelProps={{
        classes:{
            root: classes.cssLabel,
            focused: classes.cssFocused,
        },
    }}
        InputProps={{
            classes:{
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
            },
        }}
 
    variant="outlined"          
    label={label}
    fullWidth={true}
    name={name}
    value={data[name]}
   
    onChange={onChange}
    multiline={multiline}
    rows={rows}
    />
 
   );
};