import './App.css';
import AppRouter from './components/routing/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/featurs/Header/Header';
import SideBar from './components/featurs/SideBar/SideBar';
import Footer from './components/featurs/Footer/Footer';
import { Link } from '@material-ui/core';
import { ThemeContextProvider, theme } from './components/Context';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';


function App() {
    const [theme, setTheme] = useState();
    function changeColor() {
        if (theme === "dark") {
            setTheme("light");
        }
        else setTheme("dark");
    }
    return (<ThemeContextProvider value={theme} >
        <div style={{ backgroundColor: theme === "dark" ? "black" : "white" }} className="App" >
            <Router>
                <Header />
                <button onClick={changeColor}>change</button>
                <Grid container>
                    <Grid item sm={4} md={2}><SideBar /></Grid>
                    <Grid item sm={8} md={10}><AppRouter /></Grid>
                </Grid>
                <Footer />
            </Router>
        </div>
    </ThemeContextProvider>
    );
}

export default App;