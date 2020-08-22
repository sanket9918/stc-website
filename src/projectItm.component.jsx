import React, { Component } from "react";
import Navbar1 from "./navbar.component";
import Footer from "./footer.component";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import { project } from "./utils/project";
class ProjectItem extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Navbar1 />

        <div className="position-relative">
          <section className="section section-lg section-hero section-shaped">
            <div className="shape shape-style-1 shape-default"></div>
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <Col lg="12">
                    <h1
                      className="display-3 text-white"
                      style={{ fontSize: "48px", paddingTop: ".5em" }}
                    >
                      Projects{" "}
                    </h1>
                    <p className="lead text-white">
                      Quality projects is what makes us stand out of others and
                      make us grow up as a leader in all technical manifolds.
                    </p>
                    {/* <center>

                      
                      <p>We are getting ready to add the projects.Please come back later.</p><br /><br />
                    </center> */}
                    <section className="section section-lg pt-lg-0">
                      <Container>
                        <Row className="justify-content-center">
                          <div className="grid">
                            {project.map((e) => (
                              <Card
                                className="card-lift--hover shadow border-0"
                                style={{ height: "20em" }}
                              >
                                <CardBody className="py-5">
                                  <h6 className="text text-uppercase">
                                    {e.title}
                                  </h6>
                                  <p className="description mt-3">{e.desc}</p>
                                  <a href={e.link}>
                                    <Button
                                      className="my-cards-btn"
                                      color="primary"
                                      style={{
                                        marginTop: "1.5rem",
                                        position: "absolute",
                                        bottom: "1.5em",
                                      }}
                                      // onClick={e => e.preventDefault()}
                                    >
                                      Explore
                                    </Button>
                                  </a>
                                </CardBody>
                              </Card>
                            ))}
                          </div>
                        </Row>
                      </Container>
                    </section>
                    <div className="btn-wrapper"></div>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>
        </div>
        <Footer />
      </>
    );
  }
}

export default ProjectItem;
