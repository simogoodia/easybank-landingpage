/* eslint-disable jsx-a11y/alt-text */
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

function Footer() {
    return (
        <div className="footer p-4">
            <Container>
                <Row>
                    <Col md={2}>
                        <img className="mb-4" src="../../images/logo-white.svg" />
                        <div className="social mb-3">
                            {/* <img src="../../images/icon-facebook.svg" /> */}
                            {/* <img src="../../images/icon-youtube.svg" /> */}
                            {/* <img src="../../images/icon-twitter.svg" /> */}
                            <img className="mx-3" src="../../images/icon-pinterest.svg" />
                            <img className="me-3" src="../../images/icon-pinterest.svg" />
                            <img className="me-3" src="../../images/icon-pinterest.svg" />
                            <img src="../../images/icon-pinterest.svg" />
                            {/* <img src="../../images/icon-instagram.svg" /> */}
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="links">
                            <p>About Us</p>
                            <p>Contact</p>
                            <p>Blog</p>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="links">
                            <p>Careers</p>
                            <p>Support</p>
                            <p>Privacy Policy</p>
                        </div>
                    </Col>
                    <Col md={6} className="last">
                        <button className="rounded-pill outline-0 border-0 py-3 px-4 text-white mb-4">
                            Request invite
                        </button>
                        <p className="copyright text-white-50">&copy; EasyBank. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Footer;