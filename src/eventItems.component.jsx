import React, { Component } from 'react'
import Navbar1 from './navbar.component';
import Footer from './footer.component';
import { Container, Row, Col, Card, CardBody } from 'reactstrap'

class EventItems extends Component {

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
                                        We conduct a number of events in order to power our goal of of creating a large number of inspiring and resourceful minds who will for the carry over our legacy of being equipped with the latest technological resources.
                          </p>
                                        {/* The cards for the event listing */}

                                        <section className="section section-lg pt-lg-0">
                                            <Container>
                                                <Row className="justify-content-center">
                                                    <Col lg="12">
                                                        <Row className="row-grid">
                                                            <Col lg="4">
                                                                <Card className="card-lift--hover shadow border-0" style={{ height: "20em" }}>
                                                                    <CardBody className="py-5">

                                                                        <h6 className="text-success text-uppercase">
                                                                            Docker Workshop
                          </h6>
                                                                        <p className="description mt-3">
                                                                            Experience a unique way of learning new concepts by understanding the basics of  Docker. It is a tool designed to make it easier to create, deploy and run application by using containers.
                          </p>

                                                                        {/* <Button
                            className="mt-4"
                            color="primary"
                            href="#"
                            onClick={e => e.preventDefault()}
                          >
                            More info
                          </Button> */}
                                                                    </CardBody>
                                                                </Card>
                                                            </Col>
                                                            <Col lg="4">
                                                                <Card className="card-lift--hover shadow border-0" style={{ height: "20em" }}>
                                                                    <CardBody className="py-5">

                                                                        <h6 className="text-success text-uppercase">
                                                                            Javascript Workshop
                          </h6>
                                                                        <p className="description mt-3">
                                                                            An interactive workshop on the programming language which is a part of most of the webpages,whose implementations allow client-side script to interact with the user and make dyanamic pages.                          </p>

                                                                        {/* <Button
                                                                            className="mt-4"
                                                                            color="success"
                                                                            href="#"
                                                                            onClick={e => e.preventDefault()}
                                                                        >
                                                                            More info
                          </Button> */}
                                                                    </CardBody>
                                                                </Card>
                                                            </Col>

                                                            <Col lg="4">
                                                                <Card className="card-lift--hover shadow border-0" style={{ height: "20em" }}>
                                                                    <CardBody className="py-5">

                                                                        <h6 className="text-success text-uppercase">
                                                                            Intro to Github
                          </h6>
                                                                        <p className="description mt-3">
                                                                            An info cum hands-on session on the popular web-based hosting service for version control using Git. GITHUB offers all the distributed version control and source code management(SCM) functionality of Git as well as adding its own features.
                                                                        </p>
                                                                        {/* <Button
                                                                            className="mt-4"
                                                                            color="success"
                                                                            href="#"
                                                                            onClick={e => e.preventDefault()}
                                                                        >
                                                                            More info
                          </Button> */}
                                                                    </CardBody>
                                                                </Card>
                                                            </Col>


                                                        </Row>
                                                        <Row className="row-grid">
                                                            <Col lg="4">
                                                                <Card className="card-liftt--hover shadow border-0" style={{ height: "20em" }}>
                                                                    <CardBody className="py-5">

                                                                        <h6 className="text-success text-uppercase">
                                                                            Blockchain with Azure
                          </h6>
                                                                        <p className="description mt-3">
                                                                            An event helping you to build a fully functional Blockchain ratings app with Microsoft Azure. Participants to be mentored and monitored in the entirety of the session.                                                                        </p>
                                                                        {/* <Button
                                                                            className="mt-4"
                                                                            color="success"
                                                                            href="#"
                                                                            onClick={e => e.preventDefault()}
                                                                        >
                                                                            More info
                          </Button> */}
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

export default EventItems