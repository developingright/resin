import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navLinks = [{link:'/About',name:'About'},{link:'/Contact',name:'Contact'}];
    return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm" id="mainNav">
            <div className="container px-5">
                <Link to="/" className="navbar-brand fw-bold">RESIN</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="bi-list"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                        {navLinks.map(x =>  <li className="nav-item" key={x.name}> <a className="nav-link me-lg-3" href={x.link}> {x.name} </a> </li>)}
                    </ul>
                    <button className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0" data-bs-toggle="modal" data-bs-target="#feedbackModal">
                        <span className="d-flex align-items-center">
                            <i className="bi-chat-text-fill me-2"></i>
                            <span className="small"> <Link to="/Signin" className="nav-link me-lg-3">Sign In</Link></span>
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;