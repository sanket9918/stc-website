import React, { Component } from 'react'
import { Container, Row, Col, Button } from "reactstrap";


class Hero extends Component {
  render() {
    return (
      <>

        <div className='position-relative'>
          <section className="section section-lg section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">

            </div>
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <Col lg="6" >
                    <h1 className="display-3 text-white" style={{ fontSize: "48px", paddingTop: ".5em" }}>
                      We are STC{" "}

                    </h1>
                    <p className="lead text-white">
                    STC powered by Microsoft is a student community in VIT Vellore aimed at the enhancing skills of its members in various domains such as Management, Technical and Design through live technical sessions given by the senior members skilled in their respective domains. STC acts as a pathway for students to interact with people who have a passion for innovation.
                      </p>
                    <div className="btn-wrapper">
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="info"
                        href="#"
                      >

                        <span className="btn-inner--text">Join US</span>
                      </Button>

                    </div>
                  </Col>
                  <Col lg="6">
                    <img
                      alt="..."
                      className="img-fluid floating"
                      src={require("../src/assets/img/theme/bg1.svg")}
                    />
                  </Col>
                </Row>
              </div>
            </Container>

          </section>

        </div>
      </>
    )
  }
}
export default Hero;