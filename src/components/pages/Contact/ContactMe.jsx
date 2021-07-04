import Input from "../../featurs/Input/Input"
export default function ContactMe() {
    return (<div className="mainContact">
        <h1 className="headerContact">CONTACT US</h1>
        <h1 className="headerContact">DONT BE SHY!</h1>
        <h2>Feel free to get in touch with me.</h2>
        <form className="form" action="mailto:kineret9688@gmail.com" method="post" enctype="text/plain" noValidate autoComplete="on">
            <Input/>
        </form>
    </div>)

}
