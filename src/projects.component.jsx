import React, { Component } from 'react'

import {Container,Row,Col,Card,CardBody,Button} from 'reactstrap'

class Projects extends Component{
    render()
    {
        return(
            <>
             <section className="section section-lg pt-lg-0">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="6">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          
                          <h6 className="text-primary text-uppercase">
                            Projects
                          </h6>
                          <p className="description mt-3">
                            We work on projects that make a difference.
                          </p>
                          
                          <Button
                            className="mt-4"
                            color="primary"
                            href="/project"
                            // onClick={e => e.preventDefault()}
                          >
                            More info
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="6">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          
                          <h6 className="text-success text-uppercase">
                            Events
                          </h6>
                          <p className="description mt-3">
                          We conduct events that delivers superior value. 
                          </p>
                          
                          <Button
                            className="mt-4"
                            color="success"
                            href="/events"
                            // onClick={e => e.preventDefault()}
                          >
                            More info
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
            </>
        )
    }
}

export default Projects