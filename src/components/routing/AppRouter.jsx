import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ContactMe from '../pages/Contact/ContactMe';
import Skills from '../pages/Skills/Skills';
import Portfolio from '../pages/Portfolio/Portfolio';
import Header from '../featurs/Header/Header'
import Footer from '../featurs/Footer/Footer';
import SideBar from '../../components/featurs/SideBar/SideBar';
import { ThemeContextProvider} from '../Context';
import { useState } from 'react';
export default function AppRouter() {
    const [theme, setTheme] = useState();
    function changeColor() {
        if (theme === "dark") {
            setTheme("light");
        }
        else setTheme("dark");
    }
    return (<ThemeContextProvider value={{theme, changeColor }} >
        <div style={{ backgroundColor: theme === "dark" ? "black" : "white" }} >
            <div>
                <Header />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/Skills'>
                        <Skills />
                    </Route>
                    <Route path='/Portfolio'>
                        <Portfolio />
                    </Route>
                    <Route path='/ContactMe'>
                        <ContactMe />
                    </Route>
                </Switch>
                <SideBar />
                <Footer />
            </div >
        </div >
    </ThemeContextProvider>
    )
}