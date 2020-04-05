import React, { Component } from 'react'


import {
  Container,
  Row,
  Col
} from "reactstrap";

class About extends Component {

  render() {
    return (
      <div className="position-relative">
        <section className="section section-lg section-hero section-shaped" id="section-forward">
          <div className="shape shape-style-1 shape-default1">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />

          </div>
          <Container>
            <Row className="row-grid align-items-center" >
              <Col className="order-md-2" md="6" >

                <img
                  alt="..."
                  className="img-fluid"
                  src={require("../src/assets/img/theme/promo-1.png")}

                />
              </Col>
              <Col className="order-md-1" md="6">
                <div className="pr-md-5">
                  <div className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle mb-5">
                    <i className="fa fa-users" />
                  </div>
                  <h3>About Us</h3>
                  <p>
                    A community of passionate tech-enthusiasts , driven by three principles- Collaboration, Creativity and Experimentation, with a mission to foster innovation via passion-driven projects in various forthcoming domains that include Blockchain, Data Science, and many more. We strive to  collaborate with students through our workshops and events that ensure a definitive transfer of knowledge.
                  </p>

                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    )
  }

}

export default About;