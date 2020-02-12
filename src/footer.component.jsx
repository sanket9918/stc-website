import React, { Component } from 'react'
import {Container,Row,Col,Button,UncontrolledTooltip} from 'reactstrap'
class Footer extends Component{
    render(){
        return(
            <>
            <footer className=" footer">
          <Container>
            <Row className=" row-grid align-items-center mb-5">
              <Col lg="6">
                <h3 className=" text-primary font-weight-light mb-2">
                  Thank you for paying us a visit.
                </h3>
                <h4 className=" mb-0 font-weight-light">
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
            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                  Student Technical Community .
                  
                  
                </div>
              </Col>
              
            </Row>
          </Container>
        </footer>
            </>
        )
    }
}

export default Footer