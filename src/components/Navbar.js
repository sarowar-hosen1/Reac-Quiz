import React from 'react';
import classes from "../styles/Nabar.module.css";
import logo from "../assests/images/logo-bg.png";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
    const { currentUser, logout } = useAuth();

    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link to="/" className={classes.brand}>
                        <img src={logo} alt="Learn with Sumit Logo" />
                        <h3>Learn with Sumit</h3>
                    </Link>
                </li>
            </ul>
            <div className={classes.account}>
                {
                    currentUser ?
                        <>
                            <span className="material-icons-outlined" title="Account">
                                account_circle
                            </span>
                            <span>{currentUser.displayName}</span>
                            <span onClick={() => logout()} className="material-icons-outlined" title="Logout"> logout </span>
                        </>
                        :
                        <Link to={'/signup'}>Signup</Link>
                }

            </div>
        </nav>
    );
};

export default Navbar;