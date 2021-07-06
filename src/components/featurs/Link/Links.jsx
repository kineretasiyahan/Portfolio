import { Link } from 'react-router-dom';
import { useContextTheme } from "../../Context"
import Button from '@material-ui/core/Button';
export default function Links() {
    const themeButton=useContextTheme()
    return (
            <div className="sidebar" >
                <img className="imgKin" src="/Portfolio/kineret img header.jpeg" alt="me"></img>
                <Link to='/'>HOME <i class="fa fa-home"></i></Link>
                <Link to='/Skills'>SKILLS <i class="fas fa-graduation-cap"></i></Link>
                <Link to='/Portfolio'>PORTFOLIO <i class='fas fa-suitcase'></i></Link>
                <Link to='/ContactMe'>CONTACT <i class="fas fa-address-card"></i></Link>
                <Button type="submit" variant="contained" onClick={themeButton.changeColor} >
                    {themeButton.theme} MOOD
                </Button>    
            </div>)
}
