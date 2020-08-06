import React, { Component } from 'react'
import Navbar1 from './navbar.component';
import Footer from './footer.component';
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import {events } from './utils/events'
class EventItems extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
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
                                            Events{" "}

                                        </h1>
                                        <p className="lead text-white">
                                        We conduct a number of events in order to power our goal of creating a large number of inspiring and resourceful minds who will further carry on our legacy of being equipped with the latest technological resources.
                          </p>
                                        {/* The cards for the event listing */}

                                        <section className="section section-lg pt-lg-0">
                                            <Container>
                                                <Row className="justify-content-center">
                                                    <div className='grid'>
                                                        {events.map(e => (
                                                            <Card className="card-lift--hover shadow border-0" style={{ height: "20em" }}>
                                                                <CardBody className="py-5">
                                                                    <h6 className="text-success text-uppercase">
                                                                    {e.title}
                                                                    </h6>
                                                                    <p className="description mt-3">
                                                                    {e.desc}
                                                                    </p>

                                                                </CardBody>
                                                            </Card> 

                                                        ))}
                                                        
                                                    </div>                                                        
                                                      
                                               
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

export default EventItems