import React, { Component } from 'react'
import Navbar1 from './navbar.component';
import Footer from './footer.component';
import { Container, Row, Col, Card, CardBody, Button } from 'reactstrap'

class ProjectItem extends Component {

  render() {
    return (
      <>
        <Navbar1 />

        <div className='position-relative'>
          <section className="section section-lg section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">

            </div>
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <Col lg="12" >
                    <h1 className="display-3 text-white" style={{ fontSize: "48px", paddingTop: ".5em" }}>
                      Projects{" "}

                    </h1>
                    <p className="lead text-white">
                      Quality projects is what makes us stand out of others and make us grow up as a leader in all technical manifolds.
                      </p>
                    {/* <center>

                      
                      <p>We are getting ready to add the projects.Please come back later.</p><br /><br />
                    </center> */}
                    <section className="section section-lg pt-lg-0">
                      <Container>
                        <Row className="justify-content-center">
                          <Col lg="12">
                            <Row className="row-grid">
                              <Col lg="12">
                                <Card className="card-lift--hover shadow border-0" style={{ height: "20em", backgroundColor: "#9C27B0" }}>
                                  <CardBody className="py-5">

                                    <h6 className="text text-uppercase" style={{ color: "white" }}>
                                      FFCSonTheGo
                          </h6>
                                    <p className="description mt-3" style={{ color: "white" }}>
                                      Website to visualize VIT timetable. Helpful to students of VIT University, Vellore campus & Chennai campus during FFCS course registrations.
                            </p>

                                    <Button
                                      className="mt-4"
                                      color="success"
                                      href="https://ffcsonthego.vatz88.in"

                                    >
                                      Explore
                          </Button>
                                  </CardBody>
                                </Card>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Container>
                    </section>
                    <div className="btn-wrapper">


                    </div>
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

export default ProjectItem