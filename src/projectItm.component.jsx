import React, { Component } from 'react'
import Navbar1 from './navbar.component';
import Footer from './footer.component';
import { Container, Row, Col, } from 'reactstrap'

class ProjectItem extends Component {

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
                      Projects{" "}

                    </h1>
                    <p className="lead text-white">
                      Quality projects is what makes us stand out of others and make us grow up as a leader in all technical manifolds.
                      </p>
                    <center>
                      <p>We are getting ready to add the projects.Please come back later.</p><br /><br />
                    </center>
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

export default ProjectItem