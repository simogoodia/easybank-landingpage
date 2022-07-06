/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    const [url, setUrl] = useState("../../images/icon-hamburger.svg");
    const toggleBar = () => {
        const nav = document.getElementById("nav");
        const overlay = document.getElementById("overlay");
        if(url === "../../images/icon-hamburger.svg") {
            setUrl(url.replace("hamburger", "close"));
            nav.classList.add("show");
            overlay.classList.add("show");
        } else {
            setUrl(url.replace("close", "hamburger"));
            nav.classList.remove("show");
            overlay.classList.remove("show");
        }
    }

    return (
        <NavbarBs className="bg-white">
            <Container>
                <Nav.Link to="/" as={NavLink}>
                        <img src="../../images/logo.svg" />
                </Nav.Link>
                <div className="nav" id="nav">
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>
                        About
                    </Nav.Link>
                    <Nav.Link to="/contact" as={NavLink}>
                        Contact
                    </Nav.Link>
                    <Nav.Link to="/blog" as={NavLink}>
                        Blog
                    </Nav.Link>
                    <Nav.Link to="/careers" as={NavLink}>
                        Careers
                    </Nav.Link>
                </div>
                <button className="rounded-pill outline-0 border-0 py-3 px-4 text-white">
                    Request invite
                </button>
                <div className="bar" onClick={toggleBar}>
                    <img src={url} id="bar" />
                </div>
            </Container>
        </NavbarBs>
    );
}
export default Navbar;