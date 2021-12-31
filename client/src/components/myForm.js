import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import React from 'react'
import Container from 'react-bootstrap/Container';
import './myForm.css';
function myForm(props) {
    return (
      <Container className="myContainer mt-5">
<Form onSubmit={props.doSomething}>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="input" placeholder="Enter Name"  onChange={props.handleName} />

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={props.handlePassword}/>
  </Form.Group>

  <Button variant="primary" type="submit" className="mt-5">
    Submit
  </Button>
</Form>
</Container>
    )
}

export default myForm
