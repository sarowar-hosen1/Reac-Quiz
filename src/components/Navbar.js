import React from 'react';
import classes from "../styles/Nabar.module.css";
import logo from "../assests/images/logo-bg.png";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <a href="index.html" className={classes.brand}>
                        <img src={logo} alt="Learn with Sumit Logo" />
                        <h3>Learn with Sumit</h3>
                    </a>
                </li>
            </ul>
            <div className={classes.account}>
                <span className="material-icons-outlined" title="Account">
                    account_circle
                </span>
                <a href="signup.html">Signup</a>
                <span className="material-icons-outlined" title="Logout"> logout </span>
            </div>
        </nav>
    );
};

export default Navbar;