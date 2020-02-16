///
import React, { useState } from "react";

import { Button, Container, Form } from "react-bootstrap";
//import { BetEditor } from "../Bet/BetEditor";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_BET } from "../../api/bet_entry_mutation";

export const BetEntry = (props: any) => {
  const [values, setValues] = useState({
    title: "",
    body: ""
  });
  const handleChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  //
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() == false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    //console.log({ values });
    addBet();
  };
  const [addBet, { loading }] = useMutation(CREATE_BET, {
    update(proxy, result) {
      //console.log(result);
      window.location.href = "/";

    },
    variables: values
  });

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit} noValidate validated={validated}>
          <Form.Group controlId="title">
            <Form.Label>Title:</Form.Label>
            <Form.Control
              required
              type="text"
              name="title"
              placeholder="Enter Title"
              onChange={handleChange}
              value={values.title}
            />
          </Form.Group>
          <Form.Group controlId="body">
            <Form.Label>Body:</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              type="text"
              name="body"
              placeholder="Bet Entry"
              onChange={handleChange}
              value={values.body}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a bet title
            </Form.Control.Feedback>

            <Form.Text className="text-muted">
              Use the form above to create a post. Make sure you fill the
              required title and body fields and then press submit.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              Please make a bet entry
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      <div className="mb-3"></div>
    </>
  );
};

/*
 <Form.Control
                  as="textarea"
                  rows="3"
                  type="text"
                  name="body"
                  placeholder="Bet Entry"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.body}
                />

                */
