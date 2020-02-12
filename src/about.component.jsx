import React, { Component } from 'react'


import {   
    Container,
    Row,
    Col
  } from "reactstrap";

  class About extends Component{

    render()
    {
        return(
            <>
            <section className="section section-lg">
                  <Container>
                    <Row className="row-grid align-items-center">
                      <Col className="order-md-2" md="6">
                        <img
                          alt="..."
                          className="img-fluid floating"
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
                            We are a community driven with commitment and spirit of achieving succes while making a our own mark with our presence
                          </p>
                          
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </section>
            </>
        )
    }
      
  }

  export default About;