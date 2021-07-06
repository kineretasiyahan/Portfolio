import TextField from '@material-ui/core/TextField';
import ButtonComponent from '../Button/Button';
import { useEffect,useRef } from 'react';
export default function Input(){

    const inputRef = useRef();
    useEffect(() => { return inputRef.current.focus()})
    function SubmitSucsses(){
    useEffect(() =>{console.log('The submit delivered'); });}
    return(
        <div>
            <TextField name="Full Name" id="standard-basic" label="Full Name" variant="filled" required />
            <br></br>
            <br></br>
            <TextField name="Age" id="filled-basic" label="Age" variant="filled" required/>
            <br></br>
            <br></br>
            <TextField name="Email" id="outlined-basic" label="Email" variant="filled" required/>
            <br></br>
            <br></br>
            <TextField name="Message" id="outlined-basic" label="Message" variant="filled" inputRef={inputRef} required />
            <br></br>
            <br></br>
            <ButtonComponent onClick={SubmitSucsses}>
            </ButtonComponent>
        </div>
    )
}