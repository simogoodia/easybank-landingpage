/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

function Articles() {
    return (
        <div className="articles">
            <Container className="py-5">
                <div className="title">
                    <h1 className="my-5">Latest Articles</h1>
                </div>
                <Row>
                    <Col lg className="mb-4">
                        <div className="content">
                            <img src="../../../../images/image-currency.jpg" className="mb-4" />
                            <div className="info">
                                <h6 className="mb-4 text-secondary">By Claire Robinson</h6>
                                <h2 className="mb-4">Receive money in any currency with no fess</h2>
                                <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg className="mb-4">
                        <div className="content">
                            <img src="../../../../images/image-restaurant.jpg" className="mb-4" />
                            <div className="info">
                                <h6 className="mb-4 text-secondary">By Wilson HuttonBy Claire Robinson</h6>
                                <h2 className="mb-4">Treat yourself without worrying about money</h2>
                                <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg className="mb-4">
                        <div className="content">
                            <img src="../../../../images/image-plane.jpg" className="mb-4" />
                            <div className="info">
                                <h6 className="mb-4 text-secondary">By Wilson Hutton</h6>
                                <h2 className="mb-4">Treat yourself EasyBank card wherever you go</h2>
                                <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg>
                        <div className="content">
                            <img src="../../../../images/image-confetti.jpg" className="mb-4" />
                            <div className="info">
                                <h6 className="mb-4 text-secondary">By Claire Robinson</h6>
                                <h2 className="mb-4">Our invite-only Beta accounts are now live!</h2>
                                <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Articles;