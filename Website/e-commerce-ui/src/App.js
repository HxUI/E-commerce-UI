import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import 'swiper/css';
import {BrowserRouter as Router, useLocation} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import React, {createContext, useEffect, useState} from "react";
import AnimatedPages from "./Components/AnimatedPages";


export const ThemeContext = createContext({})


function ScrollToTop() {
    const {pathname} = useLocation();
    useEffect(() => {
        setTimeout(()=>{window.scrollTo(0, 0)},500)

    }, [pathname]);

    return null;
}



const whiteTheme = {
    '--backGroundColor': '#FFFFFF',
    '--shadowColor': 'rgba(169, 169, 169, 0.6)',
    '--accentColor': '#FFFFFF',
    '--accentColor1': '#F0F0F0',
    '--accentColor2': '#9b9b9b',
    '--accentColor3': '#0A8200',
    '--accentColor4': '#444444',
    '--textColor': 'black',
    '--LogoFilter': 'invert(8%) sepia(94%) saturate(5041%) hue-rotate(226deg) brightness(90%) contrast(103%)',
    '--footerColor': '#00071B',
    '--hoverColor': '#000000'
};

function App() {

    const [Theme, setTheme] = useState("dark");

    function SwitchColor() {
        Theme === "dark" ? setTheme("white") : setTheme("dark");
    }
    useEffect(() => {
        if (window.history.scrollRestoration) {
            window.history.scrollRestoration = "manual";
        }
    }, []);
    return (
        <div className={"MainContainer"} style={Theme === "white" ? {...whiteTheme} : {}}>
            <Router>
                <ScrollToTop/>
                <ThemeContext.Provider value={{SwitchColor, Theme}}>
                    <Navbar/>
                        <AnimatedPages/>
                    <Footer/>
                </ThemeContext.Provider>
            </Router>
        </div>
    );
}

export default App;
