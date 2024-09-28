import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
    {
      title: "iPhone 16 Pro",
      price: 119900.0,
      description:
        "Titanium design with larger 15.9 cm (6.3″) Super Retina XDR display, footnote 1 durable, latest-generation Ceramic Shield, Action button, and USB-C with USB 3 speeds footnote 2",

      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone16pro-digitalmat-gallery-3-202409?wid=728&hei=666&fmt=p-jpg&qlt=95&.v=1723843057832",
    },
    {
      title: "iPhone 16 Pro Max ",
      price: 144900.0,
      description:
        "Titanium design with larger 17.4 cm (6.9″) Super Retina XDR display, footnote 1 durable, latest-generation Ceramic Shield, Action button, and USB-C with USB 3 speeds footnote 2",

      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone16promax-digitalmat-gallery-3-202409?wid=728&hei=666&fmt=p-jpg&qlt=95&.v=1723843667225",
    },
    {
      title: "iPhone 15",
      price: 69900.0,
      description:
        "15.5 cm  durable colour-infused glass and aluminium design footnote ◊ with Ceramic Shield front",

      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-digitalmat-gallery-4-202309?wid=728&hei=666&fmt=png-alpha&.v=1693011169045",
    },
    {
      title: "iPhone 14",
      price: 59900.0,
      description:
        "15.4 cm durable design footnote ¹ with Ceramic Shield and water and dust resistance",

      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone14-digitalmat-gallery-3-202209?wid=728&hei=666&fmt=png-alpha&.v=1662055813794",
    },
    {
      title: "iPhone SE",
      price: 47600.0,
      description:
        "11.94 cm Retina HD display footnote ¹ that’s bright, colourful and sharp",
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphonese-digitalmat-gallery-3-202203?wid=728&hei=666&fmt=png-alpha&.v=1644987579761",
    },
    {
      title: "Apple Watch Series 10 ",
      price: 46900.0,
      description:
        "The thinnest Apple Watch ever, with our biggest display. With a new wide-angle Always-On OLED Retina display.",
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-s10-digitalmat-gallery-5-202409?wid=728&hei=666&fmt=png-alpha&.v=1725019651298",
    },
    {
      title: "Apple Watch Ultra 2",
      price: 89900.0,
      description:
        "The ultimate sports and adventure watch has a rugged 49mm titanium case with 100-metre water resistance  footnote  § and IP6X dust resistance.  footnote  ° Now in black",
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-ultra2-digitalmat-gallery-4-202409?wid=728&hei=668&fmt=png-alpha&.v=1725019653397",
    },
    {
      title: "Apple Watch SE",
      price: 24900.0,
      description:
        "With Family Setup, your kids can use Apple Watch,  footnote  § even if they don’t have their own iPhone",
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-se-digitalmat-gallery-5-202409_GEO_IN?wid=728&hei=666&fmt=png-alpha&.v=1725126453405",
    },
    {
      title: "MacBook Air 13",
      price: 99900.0,
      description:
        "Portable design — Lightweight and less than two centimeters thin, so you can take MacBook Air anywhere you go.",
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-m2-digitalmat-gallery-1-202402?wid=728&hei=666&fmt=png-alpha&.v=1707263976493",
    },
    {
      title: "MacBook Pro 14",
      price: 169900.0,
      description:
        "With M3, M3 Pro or M3 Max, our most advanced chips for personal computers, MacBook Pro empowers you to take on the most demanding projects",
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-14-digitalmat-gallery-1-202310?wid=728&hei=666&fmt=png-alpha&.v=1696971522628",
    },
    {
      title: "iMac",
      price: 134900.0,
      description:
        "Supercharged by the Apple M3 chip, so everything you do on your iMac is incredibly fast and responsive",
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac24-digitalmat-gallery-2-202310?wid=728&hei=666&fmt=png-alpha&.v=1697559004207",
    },
    {
      title: "Mac mini",
      price: 59900.0,
      description:
        "Do more and do it faster with the next-generation M2 or M2 Pro chip",
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-mini-digitalmat-gallery-4-202301?wid=728&hei=666&fmt=png-alpha&.v=1670038169062",
    },
  ]);
  return (
    <>
      <div className="app">
        <Container>
          <Row>
            {products.map((product) => (
              <Col xs={6} md={4} lg={3} key={product.id}>
                <Card className="product-card">
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title className="product-title">
                      {product.title}
                    </Card.Title>
                    <Card.Text className="product-description">
                      {product.description}
                    </Card.Text>
                    <Card.Text className="product-price">
                      ₹{product.price}
                    </Card.Text>
                    <Button variant="primary" size="sm">
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;

