import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ContactMe from '../pages/Contact/ContactMe';
import Skills from '../pages/Skills/Skills';
import Portfolio from '../pages/Portfolio/Portfolio';
// import { ThemeContextProvider,theme } from '../Context';
// import { useState } from 'react';

export default function AppRouter() {
    // const [theme, setTheme] = useState();
    // function changeColor() {
    //     if (theme === "dark") {
    //         setTheme("light");
    //     }
    //     else setTheme("dark");
    // }
    return (
    // <ThemeContextProvider value={theme} >
        // <div style={{backgroundColor: theme === "dark" ? "black" : "white" }}>
        <div>
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
            {/* <button onClick={changeColor}>change</button> */}
        </div >
    // </ThemeContextProvider>
    )
}

