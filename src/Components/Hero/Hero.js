import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Hero.css";
import Header from "../Header/Header";
import heroImage from "../../../src/Images/hero-gif.gif";

const Hero = () => {
  return (
    <section className="hero-area">
      <Header />
      <Container>
        <div className="hero-content">
          <div className="hero-elements">
            <Row className="d-md-flex">
              <Col lg={6}>
                <div className="hero-element-text">
                  <div className="hero-heading">
                    <h5 className="text-white">
                      /<span>/</span> The year is 2049...
                    </h5>
                  </div>
                  <h1 className="text-white hero-text-heading">
                    THE PROJECT <br />
                    NAYOM1
                  </h1>
                  <p className="text-white pt-4">
                    PROJECT NAYOM1 NFT Collection is a collaborative project by
                    Another-1 & Casadei, creatively directed by shoe designer
                    Ricardo Cook and artistically supported by 3D artist
                    HardMetaCore. <br /> <br />
                    There are 1000 NFTs, all with unique PFPs, all with amazing
                    phygital perks, all a statement to the powerful synergy of
                    the fashion world and web3. Each NFT allows for the physical
                    forging of the limited edition ‘NAYOM1 Blade’ heels.
                  </p>
                </div>
              </Col>
              <Col lg={6}>
                <div className="hero-element-image">
                  <img className="w-100" src={heroImage} alt="" />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
