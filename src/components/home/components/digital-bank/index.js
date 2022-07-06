/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

function DigitalBank() {
    return (
        <div className="digital-mockups">
            <div className="overlay" id="overlay"></div>
            <Container>
                <Row>
                    <Col>
                        <div className="details">
                            <div className="info">
                                <h2 className="mb-4">Next generation <br />digital banking</h2>
                                <p className="mb-4" style={{ color: "#c1c1c4" }}>Take your financial life online. Your Easybank account <br />will be a one-step shop for spending, saving, <br />budgeting, investing, and much more.</p>
                                <button className="rounded-pill outline-0 border-0 py-3 px-4 text-white">
                                    Request invite
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="mockups">
                            <img src="../../../../images/bg-intro-desktop.svg" />
                            <img src="../../../../images/image-mockups.png" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default DigitalBank;