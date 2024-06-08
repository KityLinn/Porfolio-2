import { Col, Row, Card} from "react-bootstrap";
import { Link } from "react-router-dom";
import  holidaze  from "../assets/holidaze.png"
import mebay from "../assets/me-bay.png"
import shop from "../assets/online-shop.png"

export function Index() {
  return (
    <>
      <section className="d-flex flex-column justify-content-center">
        <Row xs={1} md={2} lg={3} className="g-3 mt-5">
          <Col>
            <Card className="h-100 d-flex flex-column venue-card-bg">
              <Card.Img
                variant="top"
                src={holidaze}
                alt="holidaze"
                style={{ objectFit: "cover", height: "250px" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex flex-column">
                  <span className="fs-5">Holidaze</span>
                </Card.Title>
                <Card.Text className="truncate-text mt-3">
                  <span className="fs-6">A booking website that allows users to book a venue as well as create a venue</span>
                </Card.Text>
                <div className="d-block mt-auto">
                  <Link to="https://github.com/KityLinn/Linn-Kristine-Exam-2" className="nav-link">
                    Github link
                  </Link>
                  <Link to="https://soft-daffodil-3e238f.netlify.app" className="nav-link">
                    Live website
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 d-flex flex-column venue-card-bg">
              <Card.Img
                variant="top"
                src={mebay}
                alt="me-bay"
                style={{ objectFit: "cover", height: "250px" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex flex-column">
                  <span className="fs-5">Me-Bay</span>
                </Card.Title>
                <Card.Text className="truncate-text mt-3">
                  <span className="fs-6">A fictional online shop that lets users browse various products as well as create their own product listings and make bids</span>
                </Card.Text>
                <div className="d-block mt-auto">
                <Link to="https://github.com/KityLinn/Auction-website" className="nav-link">
                    Github link
                  </Link>
                  <Link to="https://kitylinn.github.io/Auction-website" className="nav-link">
                    Live website
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 d-flex flex-column venue-card-bg">
              <Card.Img
                variant="top"
                src={shop}
                alt="shop"
                style={{ objectFit: "cover", height: "250px" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex flex-column">
                  <span className="fs-5">Online shop</span>
                </Card.Title>
                <Card.Text className="truncate-text mt-3">
                  <span className="fs-6">An online shop that lets viewers browse a limited selection of products, ad them to their cart and simulate checking them out</span>
                </Card.Text>
                <div className="d-block mt-auto">
                <Link to="https://github.com/KityLinn/fameworks-ca" className="nav-link">
                    Github link
                  </Link>
                  <Link to="https://fascinating-dolphin-15c669.netlify.app" className="nav-link">
                    Live website
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </>
  );

  }