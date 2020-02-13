import React, { Component } from 'react'
import { Container, Row, Col,Button} from "reactstrap";


class Hero extends Component{
    render(){
        return(
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
                      <h1 className="display-3 text-white">
                        We are One STC{" "}
                        
                      </h1>
                      <p className="lead text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatibus officiis vel, dolore error ad ducimus repellat! Rerum nisi dolorem explicabo delectus optio, deserunt et aut modi a voluptas accusantium.

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
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          
      </div>
      </>
        )
    }
}
export default Hero;