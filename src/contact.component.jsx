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


  class Contact extends Component{

    constructor(){
        super()
        this.state={
            nameFocused:''
        }
    }
      render(){
          return(
              <>
               
              <section className="section section-lg section-hero section-shaped">
              
              <div className="shape shape-style-1 shape-dark">
              
            </div>
           
                <section className="section section-lg pt-lg-0 section-contact-us">
                
            <Container>
           
            {/* Background circles */}
            
              <Row className="justify-content-center">
                <Col lg="8">
                <h2 style={{textAlign:"center",color:"white",marginBottom:"1em"}}>Do you have a query?</h2>
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">                      
                      <p className="mt-0">
                        Please feel free to contact us through this form.
                      </p>
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
                            placeholder="Your name"
                            type="text"
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
                            placeholder="Email address"
                            type="email"
                            onFocus={e => this.setState({ emailFocused: true })}
                            onBlur={e => this.setState({ emailFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Type a message..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          Send Message
                        </Button>
                      </div>
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



