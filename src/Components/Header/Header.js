import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import logo from "../../Images/headerlogo.png";
import "./Header.css";

const Header = () => {
  return (
    <section className="nav-area">
      <Container className="nav-content">
        <Row>
          <Col lg={6}>
            <div className="nav-logo  bg-transparent ">
              <img className="" src={logo} alt="" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="text-white header-media-icon">
              <div className="header-icon pl-3">
                <i className="fa-solid fa-house"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
