import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
export default function ContactMe() {
    return (<div className="main">
        <form className="form" action="mailto:kineret9688@gmail.com" method="post" enctype="text/plain" noValidate autoComplete="on">
            <TextField id="standard-basic" label="Full Name" variant="filled" />
            <br></br>
            <br></br>
            <TextField id="filled-basic" label="Age" variant="filled" />
            <br></br>
            <br></br>
            <TextField id="outlined-basic" label="Email" variant="filled" />
            <br></br>
            <br></br>
            <TextField id="outlined-basic" label="Message" variant="filled" />
            <br></br>
            <br></br>
            <Button type="submit" variant="contained">
               submit
            </Button>
            {/* <button type="submit">send</button> */}
        </form>

    </div>)

}