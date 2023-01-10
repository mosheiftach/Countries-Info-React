import './Header.css'
import React, { useState } from 'react';


function Header() {
    const [darkMode, setDarkMode] = useState(true);

    function setTheme() {
        if (darkMode) {
            document.documentElement.style.setProperty('--text-color', '#FFFFFFFF');
            document.documentElement.style.setProperty('--components-bg-color', '#2B3844');
            document.documentElement.style.setProperty('--body-color', '#202C36');
            document.documentElement.style.setProperty('--nav-shadow', '#1A1414FF');
            document.documentElement.style.setProperty('--body-color-on-country-page', '#202C36');

            setDarkMode(false)
        } else {
            document.documentElement.style.setProperty('--components-bg-color', '#FFFFFFFF');
            document.documentElement.style.setProperty('--text-color', '#111517');
            document.documentElement.style.setProperty('--body-color', '#F2F2F2');
            document.documentElement.style.setProperty('--nav-shadow', '#808080FF');
            document.documentElement.style.setProperty('--body-color-on-country-page', '#FFFFFFFF');
            setDarkMode(true)
        }
    }

    return (
        <div className="header-wrapper">
            <div id="header">
                <h2 className="header-left-part">Where in the world?</h2>
                <div className="header-right-part-wrapper" onClick={setTheme} >
                    <img id="icon-header" src={process.env.PUBLIC_URL + 'path.svg'} alt='moon'></img>
                    <div id="header-right-part">
                        DarkMode
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;