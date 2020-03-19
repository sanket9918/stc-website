import React, { Component } from 'react'
import classnames from 'classnames'
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  Container,
  Row,
  Col,

} from "reactstrap";


class Contact extends Component {


  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }


  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      nameFocused: '',
      status:''

    }
  }
  render() {
    const {status} = this.state
    return (
      <>

        <section className="section section-lg section-hero section-shaped">

          <div className="shape shape-style-1 shape-dark">

          </div>

          <section className="section section-lg pt-lg-0 section-contact-us">

            <Container>

              {/* Background circles */}

              <Row className="justify-content-center">
                <Col lg="8">
                  <h2 style={{ textAlign: "center", color: "white", marginBottom: "1em" }}>Do you have a query?</h2>
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <p className="mt-0">
                        Please feel free to contact us through this form.
                      </p>

                      <form onSubmit={this.submitForm}
                        action="https://formspree.io/mnqzzodn"
                        method="POST">
                        <FormGroup
                          className={classnames("mt-5", {
                            focused: this.state.nameFocused
                          })}
                        >
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-user-run" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              id="name"
                              placeholder="Your name"
                              type="text"
                              name="name"
                              onFocus={e => this.setState({ nameFocused: true })}
                              onBlur={e => this.setState({ nameFocused: false })}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup
                          className={classnames({
                            focused: this.state.emailFocused
                          })}
                        >
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              id="email"
                              placeholder="Email address"
                              type="email"
                              name="email"
                              onFocus={e => this.setState({ emailFocused: true })}
                              onBlur={e => this.setState({ emailFocused: false })}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup className="mb-4">
                          <Input
                            id="message"
                            className="form-control-alternative"
                            cols="80"
                            name="message"
                            placeholder="Type a message..."
                            rows="4"
                            type="textarea"
                          />
                        </FormGroup>
                        <div>
                          <center>
                        {status === "SUCCESS" ? <p>Thanks! We will get back to you as soon as possible</p> : 
                          <Button
                            block
                            className="btn-round"
                            color="default"
                            size="lg"
                            type="submit"
                          >
                            Send Message
                        </Button>
                        }   
                        {status === "ERROR" && <p>Ooops! There was an error.</p>}
                        </center>
                        </div>
                      </form>
                    </CardBody>

                  </Card>
                </Col>
              </Row>

            </Container>
          </section>
        </section>
      </>
    )
  }
}


export default Contact



