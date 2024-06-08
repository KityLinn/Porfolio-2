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
                  <span className="fs-6">Description</span>
                </Card.Text>
                <div className="d-block mt-auto">
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
                  <span className="fs-6">Description</span>
                </Card.Text>
                <div className="d-block mt-auto">
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
                  <span className="fs-6">Description</span>
                </Card.Text>
                <div className="d-block mt-auto">
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </>
  );

  }