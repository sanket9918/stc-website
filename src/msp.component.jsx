import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
class MSP extends Component {

    render() {
        return (
            <>
                <section className="section section-lg section-hero section-shaped-msp" id="section-forward">

                    <Container>
                        <Row className="row-grid align-items-center" >

                            <Col className="order-md-1" md="6" >

                                <img
                                    alt="..."
                                    className="img-fluid"
                                    style={{ padding: "3.5em" }}
                                    src={require("../src/assets/img/msp.svg")}

                                />
                            </Col>
                            <Col className="order-md-2" md="6">
                                <div className="pr-md-5">

                                    <h3 style={{ color: "white" }}>Community driven Excellence</h3>
                                    <p style={{ color: "#C4CBE5" }}>
                                        The community driven by the talents with the sheer amount of inspiration and guidance all under the roof of  Microsoft and we have the opportunity to be the driving force of this moment by becoming the largest Microsoft Student Partner pool in the Institution. Large number of resources along with demonstrated experience of the community helps us grow up with pace.
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

export default MSP