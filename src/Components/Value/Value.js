import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Value.css";

const Value = () => {
  return (
    <section className="value-area">
      <Container>
        <div className="value-content">
          <Row>
            <Col lg={6}>
              <div className="value-text">
                <h1 className="value-heading text-white">
                  PROJECT NYOM1 NFT COLLECTION
                </h1>
                <p className="value-para text-white">
                  The collection itself is a celebration of the 10-year
                  anniversary of The Blade Silhouette by giving it a futuristic
                  makeover that will jumpstart the modernization of this
                  traditional Italian high-heel powerhouse. The inspiration
                  behind the collection comes from Ricardo’s obsession with the
                  holographic aesthetic that has been heavily influenced by the
                  remake of the cult movie, The Blade Runner, set in a dystopian
                  future Los Angeles of 2049, in which synthetic humans roam the
                  planet while the discovery of a long-buried secret leads
                  officer K to track down the former Blade Runner in order to
                  prevent the downfall of humanity. Similarly, PROJECT NAYOM1
                  NFT Collection will become the best-kept secret of luxury
                  footwear, as its utilization of web3 technologies will present
                  a strong case for digitalization of traditional fashion
                  brands.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="value-video">
                <div className="ratio ratio-4x3">
                  <iframe
                    src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                    title="YouTube video"
                    // allowfullscreen
                  ></iframe>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Value;
