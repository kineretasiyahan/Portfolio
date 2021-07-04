import TextField from '@material-ui/core/TextField';
import ButtonComponent from '../Button/Button';
export default function Input(){
    return(
        <div>
            <TextField name="Full Name" id="standard-basic" label="Full Name" variant="filled" />
            <br></br>
            <br></br>
            <TextField name="Age" id="filled-basic" label="Age" variant="filled" />
            <br></br>
            <br></br>
            <TextField name="Email" id="outlined-basic" label="Email" variant="filled" />
            <br></br>
            <br></br>
            <TextField name="Message" id="outlined-basic" label="Message" variant="filled" />
            <br></br>
            <br></br>
            <ButtonComponent/>
        </div>
    )
}