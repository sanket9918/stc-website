import React, { Component } from 'react'
import { Container, Row, Col, Button, UncontrolledCarousel } from 'reactstrap'

class Testimonial extends Component {
  render() {
    return (
      <>
        <section className="section section-shaped">
          <div className="shape shape-style-1 shape-default-testimonial">

          </div>
          <Container className="py-md">
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="12">

                <center>
                  {/* <h1 className="text-white font-weight-light">
                 Testimonial
                </h1> */}
                  <i className="lead text-white mt-4">
                    " One of the best technical clubs in VIT, awesome club mates and very friendly seniors. "
                </i><br /><br />
                  <i className="text-white font-weight-light" style={{ textAlign: "right" }}>
                    -Krishna

                </i>

                </center>

              </Col>
              <Col className="mb-lg-auto" lg="6">
                {/* <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                  <UncontrolledCarousel items={items} />
                </div> */}
              </Col>
            </Row>
          </Container>
        </section>
      </>
    )
  }
}

export default Testimonial