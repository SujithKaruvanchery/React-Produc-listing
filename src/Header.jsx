import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <NavDropdown title="Shop" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action2">Categories</NavDropdown.Item>
                <NavDropdown.Item href="#action3">
                  Best Sellers
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  New Arrivals
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">Sale</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Products" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action6">
                  Featured Products
                </NavDropdown.Item>
                <NavDropdown.Item href="#action7">Collections</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action8">Bundles</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action9">About Us</Nav.Link>
              <Nav.Link href="#action10">Blog</Nav.Link>
              <NavDropdown
                title="Customer Service"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action11">FAQs</NavDropdown.Item>
                <NavDropdown.Item href="#action12">Contact Us</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action13">
                  Shipping Info
                </NavDropdown.Item>
                <NavDropdown.Item href="#action14">
                  Returns & Exchanges
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Account" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action15">
                  Login/Register
                </NavDropdown.Item>
                <NavDropdown.Item href="#action16">
                  Order History
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action17">Wishlist</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action18">Cart</Nav.Link>
              <Nav.Link href="#action19">Promotions</Nav.Link>
              <Nav.Link href="#action20">Gift Cards</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
