import React, { Component } from 'react'
import { Container, Row, Col, Button, UncontrolledTooltip } from 'reactstrap'
import footimage from '../src/assets/img/brand/white-horizontal.svg'
class Footer extends Component {
  render() {
    return (
      <div style={{ marginTop: "-6.8em" }}>

        <svg viewBox="0 0 907 110" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M907 115V23.781C773.637 38.5914 698.864 38.8327 565.5 23.781C342.471 -7.15686 218.672 -6.98349 0 23.781V115H907Z" fill="black" />
        </svg>

        <footer className=" footer">
          <Container>
            <Row className=" row-grid align-items-center mb-5">
              <Col lg="6">
                <h3 className=" text-primary font-weight-light mb-2">
                  Thank you for paying us a visit.
                </h3>
                <h4 className=" mb-0 font-weight-light" style={{ color: '#60608B' }}>
                  Let's get in touch on any of these platforms.
                </h4>
              </Col>
              <Col className=" text-lg-center btn-wrapper" lg="6">

                <Button
                  className=" btn-neutral btn-icon-only btn-round ml-1"
                  color="facebook"
                  href="https://www.facebook.com/mstcvit"
                  id="fb"
                  size="lg"
                  target="_blank"
                >
                  <i className=" fa fa-facebook-square" />
                </Button>
                <UncontrolledTooltip delay={0} target="fb">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className=" btn-neutral btn-icon-only btn-round ml-1"
                  color="instagram"
                  href="https://www.instagram.com/mstcvit"
                  id="insta"
                  size="lg"
                  target="_blank"
                >
                  <i className=" fa fa-instagram" />
                </Button>
                <UncontrolledTooltip delay={0} target="insta">
                  Follow us
                </UncontrolledTooltip>

              </Col>
            </Row>
            <hr />
            <center>

              <img
                alt="..."
                className="img-fluid"
                src={footimage}
                style={{ height: "200px", paddingBottom: "1em" }}
              />
              <Col md="6">
                <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                  Student Technical Community .


                </div>
                <br/>
                <div className="copyright">
                  <p>Designed by <a href="https://www.linkedin.com/in/sanket-mohapatra-b10661176/"> Sanket Mohapatra</a></p>
                </div>
              </Col>
            </center>
            <Row className=" align-items-center justify-content-md-between">

            </Row>
          </Container>
        </footer>
      </div>
    )
  }
}

export default Footer