 import { TextField } from "@material-ui/core";



export const RenderInputText =({name, label, state, onChange , multiline, rows}:any ) => {
    const{ data} = state;
    return  (
    <TextField  
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