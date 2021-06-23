import React, { useState, useCallback } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { formValidation as validate } from '../../services';

export default function PaymentForm({cvc, setCvc, expiry, setExpiry, name, setName, number, setNumber, handlePayment}) {

  
  const [focus, setFocus] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleInputFocus = (e) => {
    setFocus(e.target.name);
  }

  //form changes handler
  const handleNameChange = useCallback(value => {
    setName(value)
  }, [setName]);

  const handleNumberChange = useCallback(value => {
    setNumber(validate.formatCreditCardNumber(value));
  }, [setNumber]);

  const handleExpiryChange = useCallback(value => {
    setExpiry(validate.formatExpirationDate(value));
  }, [setExpiry]);

  const handleCVCChange = useCallback(value => {
    setCvc(validate.formatCvc(value));
  }, [setCvc]);


  //form validators
  function validateName() {
    return validate.nameValidation(submitted, name);
}

function validateAccountNumber() {
    return validate.accountNumberValidation(submitted, number);
}

function validateCvc() {
  return validate.cvcValidation(submitted, cvc);
}

function validateExpiry() {
  return validate.expiryValidation(submitted, expiry);
}
function checkAllValidity() {
  if(validateName() && validateAccountNumber() && validateCvc() && validateExpiry()){
    return true;
  } else {
    return false;
  }
}

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);

    //handle payment event
    if (name && checkAllValidity()) {
      handlePayment()
    }
  }


    return (
      <Row id="PaymentForm">
        <Col>
          <Cards
            cvc={cvc}
            expiry={expiry}
            focused={focus}
            name={name}
            number={number}
          />
        </Col>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md={12}>
                <Form.Control
                  type="text"
                  name="number"
                  value={number}
                  placeholder="Card Number"
                  className={'form-control' + (!validateAccountNumber() && ' is-invalid')}
                  onChange={(e) => handleNumberChange(e.target.value)}
                  onFocus={handleInputFocus}
                />
                 {!validateAccountNumber() &&
                        <div className="invalid-feedback">Enter valid account number</div>
                  }
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md={12}>
                <Form.Control
                  type="text"
                  name="name"
                  maxLength={24}
                  value={name}
                  placeholder="Name"
                  className={'form-control' + (!validateName() && ' is-invalid')}
                  onChange={(e) => handleNameChange(e.target.value)}
                  onFocus={handleInputFocus}
                />
                 {!validateName() &&
                        <div className="invalid-feedback">Name is required</div>
                  }
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md={6}>
                <Form.Control
                  type="text"
                  name="expiry"
                  value={expiry}
                  placeholder="Valid Thru"
                  className={'form-control' + (!validateExpiry() && ' is-invalid')}
                  onChange={(e) => handleExpiryChange(e.target.value)}
                  onFocus={handleInputFocus}
                />
                 {!validateExpiry() &&
                        <div className="invalid-feedback">Enter valid expiry date</div>
                  }
              </Form.Group>
              <Form.Group as={Col} md={6}>
                <Form.Control
                  type="text"
                  name="cvc"
                  max={3}
                  placeholder="CVC"
                  className={'form-control' + (!validateCvc() && ' is-invalid')}
                  value={cvc}
                  onChange={(e) => handleCVCChange(e.target.value)}
                  onFocus={handleInputFocus}
                />
                 {!validateCvc() &&
                        <div className="invalid-feedback">Enter valid cvc</div>
                  }

              </Form.Group>
            </Form.Row>
            <Button type="submit">
          Pay Amount
        </Button>
          </Form>
        </Col>
      </Row>
    );
  }





