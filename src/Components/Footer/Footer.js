import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import footerImage from "../../Images/headerlogo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-area">
      <Container>
        <div className="footer-content text-center">
          <Row className="align-items-center">
            <Col lg={4}>
              <h3 className="text-white">FAQ</h3>
            </Col>
            <Col lg={4}>
              <img src={footerImage} alt="" className="footer-image" />
            </Col>
            <Col lg={4}>
              <div className="text-white text-end">
                <div className="header-icon pl-3">
                  <i className="fa-solid fa-house"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-instagram"></i>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
