import React, { useState } from 'react'
import { Accordion, Form, Card, Container, Col, Button } from 'react-bootstrap'
import NavBar from '../../components/NavBar'
import { formValidation as validate } from '../../services';
import PaymentForm from '../../components/PaymentForm';
import PaymentSuccessCard from '../../components/PaymentSuccessCard';
import PriceCard from '../../components/PriceCard';
import Footer from '../../components/Footer/Footer';
import { checkoutService } from '../../services';
import { alertActions } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import './Checkout.css'

function Checkout(props) {

    const { productId, qty, amount } = (props.location && props.location.state) || {};
    const dispatch = useDispatch();
    const user = useSelector(state => state.userAuth.user);


    const [addressLine, setAddressLine] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [addressValid, setAddressValid] = useState(false);
    const [cvc, setCvc] = useState("");
    const [expiry, setExpiry] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [paymentType, setPaymentType] = useState("");
    const [showModal, setShowModel] = useState(false);



    //form validation

    function validateAddress() {
        return validate.nameValidation(submitted, addressLine);
    }

    function validateCity() {
        return validate.nameValidation(submitted, city);
    }

    function validateState() {
        return validate.nameValidation(submitted, state);
    }

    function validateCountry() {
        return validate.nameValidation(submitted, country);
    }

    function validatePinCode() {
        return validate.zipcodeValidation(submitted, pincode);
    }


    function checkAllValidity() {

        if (validateAddress() && validateCity() && validateState() && validateCountry() && validatePinCode()) {
            return true;
        }

        return false;

    }

    function handleAddressSubmit(event) {
        event.preventDefault();
        setSubmitted(true);

        if (checkAllValidity() && submitted) {
            setAddressValid(true);
        }

    }

    function handlePayment() {

        const bookingDetails = {
            "user": { "userId": user.userId },
            "product": { "productId": productId },
            "qty": qty,
            "deliveryDate": "2021-06-18T03:57:10.225+00:00",
            "billingAddress": { "line": addressLine, city, pincode, state, country },
            "payment": paymentType === "credit card" ? { "accNo": number, "amount": amount, "paymentType": "credit card", "status": "paid" } : {"amount": amount, "paymentType": "cod", "status": "not paid" },
            "status": "packed"
        }

        checkoutService.book(bookingDetails)
            .then(
                booked => {
                    setShowModel(true);

                },
                error => {
                    dispatch(alertActions.error(error.toString()));
                }
            );

    }


    return (
        <>
            <NavBar />
            <Container>
                <PaymentSuccessCard
                    showModal={showModal}
                />
                <h3 className="mb-3 mt-5 sellerPageTitle">CHECK OUT</h3>
                <span className="LineSeperator mb-5" />
                {/* <p style={{fontSize: 34}}>Total amount to be paid: ₹500</p> */}
                {amount && (
                    <PriceCard
                        totalPrice={amount}
                    />
                )}
                <Accordion className="mt-5" defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Button} variant="secondary" className="text-left" eventKey="0">
                            Delivery Address
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Form onSubmit={handleAddressSubmit}>

                                    <Form.Row>

                                        <Form.Group as={Col} md={8} controlId="formGridAddress">
                                            <Form.Label>Address line 1</Form.Label>
                                            <Form.Control
                                                autoFocus
                                                type="text"
                                                value={addressLine}
                                                placeholder="Your Address Line"
                                                className={'form-control' + (!validateAddress() && ' is-invalid')}
                                                onChange={(e) => setAddressLine(e.target.value)}
                                            />
                                            {!validateAddress() &&
                                                <div className="invalid-feedback">Address is required</div>
                                            }

                                        </Form.Group>
                                        <Form.Group as={Col} md={4} controlId="formGridPinCode">
                                            <Form.Label>Pincode</Form.Label>
                                            <Form.Control
                                                type="Number"
                                                value={pincode}
                                                placeholder="Your Pin code"
                                                className={'form-control' + (!validatePinCode() && ' is-invalid')}
                                                onChange={(e) => setPincode(e.target.value)}
                                            />
                                            {!validatePinCode() &&
                                                <div className="invalid-feedback">Pincode is required</div>
                                            }

                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} md={4} controlId="formGridCityName">
                                            <Form.Label>City</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={city}
                                                placeholder="City/Distrit/Town"
                                                className={'form-control' + (!validateCity() && ' is-invalid')}
                                                onChange={(e) => setCity(e.target.value)}
                                            />
                                            {!validateCity() &&
                                                <div className="invalid-feedback">City name is required</div>
                                            }

                                        </Form.Group>
                                        <Form.Group as={Col} md={4} controlId="formGridStateName">
                                            <Form.Label>State</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={state}
                                                placeholder="Your State. eg: Tamil Nadu"
                                                className={'form-control' + (!validateState() && ' is-invalid')}
                                                onChange={(e) => setState(e.target.value)}
                                            />
                                            {!validateState() &&
                                                <div className="invalid-feedback">State is required</div>
                                            }

                                        </Form.Group>
                                        <Form.Group as={Col} md={4} controlId="formGridCountryName">
                                            <Form.Label>Country</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={country}
                                                placeholder="Your Country. eg: India"
                                                className={'form-control' + (!validateCountry() && ' is-invalid')}
                                                onChange={(e) => setCountry(e.target.value)}
                                            />
                                            {!validateCountry() &&
                                                <div className="invalid-feedback">Country is required</div>
                                            }

                                        </Form.Group>
                                    </Form.Row>
                                    <Button type="submit" variant="dark" disabled={addressValid ? true : false}>
                                        Deliver Here
                                    </Button>
                                    {addressValid && <div className="text-success mt-2">Address Saved Successfully</div>}

                                </Form>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Button} variant="secondary" disabled={addressValid ? false : true} className="text-left" onClick={() => console.log("hii")} eventKey="1">
                            Payment Options
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <div key={`inline-radio`} className="mb-3">
                                    <Form.Check inline label="Cash on delivery" onChange={e => setPaymentType(e.currentTarget.value)} value="cod" name="payment" type="radio" id={`inline-radio-1`} />
                                    <Form.Check inline label="Credit/Debit Card" onChange={e => setPaymentType(e.currentTarget.value)} Value="credit card" name="payment" type="radio" id={`inline-radio-2`} />
                                </div>
                                {paymentType === "cod" ? (
                                    <Button onClick={() => handlePayment()} variant="primary">Place order</Button>
                                ) : (
                                    <PaymentForm
                                    cvc={cvc}
                                    setCvc={setCvc}
                                    expiry={expiry}
                                    setExpiry={setExpiry}
                                    name={name}
                                    setName={setName}
                                    number={number}
                                    setNumber={setNumber}
                                    handlePayment={handlePayment}
                                />
                                )}
                              
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Container>
            <Footer />
        </>
    )
}

export default Checkout
