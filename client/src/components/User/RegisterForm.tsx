import React, { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { useMutation } from "@apollo/react-hooks";
import { REGISTER_USER } from "../../api/register_mutation";

export const RegisterForm = (props: any) => {
  //const [errors, setErrors] = useState({});

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: ""
  });

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  ///form submit and validation
  const [validated, setValidated] = useState(false);

  const onSubmit = (e: any) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    //console.log({ values });
    addUser();
  };

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(proxy, result) {
      //console.log(result);
      //props.history.push('/');
      window.location.href = "/";
    },
    onError(err) {
      //setErrors(err.graphQLErrors[0].extensions.exception.errors)
    },
    variables: values
  });

  return (
    <>
      <Form onSubmit={onSubmit} noValidate validated={validated}>
        <Row>
          <Col>
            <Form.Group controlId="formBasicFirstName">
              <Form.Control
                required
                name="firstName"
                value={values.firstName}
                type="firstName"
                placeholder="First Name"
                onChange={onChange}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicLastName">
              <Form.Control
                required
                name="lastName"
                value={values.lastName}
                type="lastName"
                placeholder="Last Name"
                onChange={onChange}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            required
            name="email"
            value={values.email}
            type="email"
            placeholder="Email"
            onChange={onChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address
          </Form.Control.Feedback>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            required
            name="password"
            value={values.password}
            type="password"
            placeholder="Password"
            onChange={onChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please enter your password
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicPasswordConfirm">
          <Form.Control
            required
            name="confirmpassword"
            value={values.confirmpassword}
            type="password"
            placeholder="Confirm Password"
            onChange={onChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please confirm your password
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </>
  );
};
