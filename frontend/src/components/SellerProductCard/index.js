import React, { useState } from 'react'
import { Card, ListGroup, ListGroupItem, Button, Carousel, Image, Modal, Form, Col } from 'react-bootstrap';
import { formValidation as validate } from '../../services';

function SellerProductCard(props) {

  const [show, setShow] = useState(false);
  const [qtyChangle, setQtyChange] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleClose = () => setShow(false);


  const handleSubmit = () => {

    setSubmitted(true);

    if(submitted && quantityValidation()){
      setShow(false);
      props.handleQtyChange(props.productId, qtyChangle);
    }
   
  }
  

  //format quantity to have only numbers upto 5 digits
  const handleQtyChange = (value) => {
    setQtyChange(validate.formatQuantity(value));
  }

  function quantityValidation() {
    return validate.checkOnlyNumber(submitted, qtyChangle);
}



  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-muted">Add quantity to <span className="text-dark">{props.productName}</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Col} md={12} controlId="formGridName">
            <Form.Label className="mb-3">Currently available quantity is {props.quantity}</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              value={qtyChangle}
              minLength={1}
              placeholder="Increase quantity"
              className={'form-control' + (!quantityValidation() && ' is-invalid')}
              onChange={(e) => handleQtyChange(e.target.value)}
            />
             {!quantityValidation() &&
                                <div className="invalid-feedback">Quantity is required</div>
                            }
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>Add</Button>
        </Modal.Footer>
      </Modal>
      <Card style={{ width: '20rem', marginBottom: 30 }}>
        <Carousel interval={null}>
          {props.images && props.images.length !== 0 && (
            props.images.map((item) => (
              <Carousel.Item>
                <Image
                  src={item.fileUrl}
                  alt="First slide"
                  style={{ height: 300, width: '100%' }}

                />
              </Carousel.Item>
            ))
          )}
        </Carousel>
        <Card.Body>
          <Card.Title>{props.productName}</Card.Title>
          <Card.Text>
            {props.descr}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Price: ₹{props.price}</ListGroupItem>
          <ListGroupItem>Available quantity: {props.quantity}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button className="mr-3" variant="danger">Delete Product</Button>
          <Button variant="dark" onClick={() =>  setShow(true)}>Add Quantity</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SellerProductCard
