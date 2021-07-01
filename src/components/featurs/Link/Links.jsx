import { Link } from 'react-router-dom';

export default function Links() {
    
    return (
            <div className="sidebar">
                <img className="imgKin" src="כנרת דף ראשי.jpeg" alt="me"></img>
                {/* <h2>Kineret Asiyahan</h2> */}
                <Link to='/'>HOME <i class="fa fa-home"></i></Link>
                <Link to='/Skills'>SKILLS <i class='fas fa-award'></i></Link>
                {/* <i class='fas fa-dharmachakra' style='font-size:36px'></i> */}
                <Link to='/Portfolio'>PORTFOLIO <i class='fas fa-suitcase'></i></Link>
                <Link to='/ContactMe'>CONTACT <i class='far fa-address-card'></i></Link>
            </div>)
}
