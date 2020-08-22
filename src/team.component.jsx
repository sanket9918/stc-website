import React, { Component } from "react";
import { Col, Row, Container, Button } from "reactstrap";
import { board } from "./utils/board";
class Team extends Component {
  render() {
    return (
      <>
        <section className="section section-lg">
          <Container>
            <Row className="justify-content-center text-center mb-lg">
              <Col lg="8">
                <h2 className="display-3">Our Board</h2>
                <p className="lead text-muted">
                  Our pathfinders who make us walk on the path of success.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="grid-board">
                  {board.map((e) => (
                    <div className="inline">
                      <img
                        key={e.image}
                        alt="..."
                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                        src={require(`../src/assets/img/board/${e.image}`)}
                        style={{ width: "200px", height: "200px" }}
                      />
                      <div className="pt-4 text-center">
                        <h5 className="title">
                          <span className="d-block mb-1">{e.name}</span>
                          <small className="h6 text-muted">{e.pos}</small>
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}
export default Team;
