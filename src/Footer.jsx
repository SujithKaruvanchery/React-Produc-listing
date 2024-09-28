import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Footer";

function Footer() {
  return (
    <div>
      <Container>
        <Row>
          <hr />
          <div className="para">
            <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Sales and Policy</p>
            <p>Legal</p>
            <p>Site Map</p>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
