/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

function ChooseBank() {
    return (
        <div className="choose-bank">
            <Container className="py-5">
                <div className="title">
                    <h1 className="mb-4">Why Choose EasyBank?</h1>
                    <p className="mb-5">We leverage Open Banking to turn your bank account into your financial hub. <br/>
                        Control your finances like never before.
                    </p>
                </div>
                <Row>
                    <Col md>
                        <img src="../../../../images/icon-online.svg" className="mb-4" />
                        <h2 className="mb-4">Online Banking</h2>
                        <p className="mb-4">Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world</p>
                    </Col>
                    <Col md>
                        <img src="../../../../images/icon-budgeting.svg" className="mb-4" />
                        <h2 className="mb-4">Simple Budgeting</h2>
                        <p className="mb-4">Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world</p>
                    </Col>
                    <Col md>
                        <img src="../../../../images/icon-onboarding.svg" className="mb-4" />
                        <h2 className="mb-4">Fast Onboarding</h2>
                        <p className="mb-4">Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world</p>
                    </Col>
                    <Col md>
                        <img src="../../../../images/icon-api.svg" className="mb-4" />
                        <h2 className="mb-4">Open API</h2>
                        <p className="mb-4">Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default ChooseBank;