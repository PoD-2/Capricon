import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { AiFillCheckCircle } from "react-icons/ai";


function PaymentSuccessCard(props) {
    return (
        <Modal 
         show={props.showModal}
        size="lg"
        backdrop="static"
        >
        <Modal.Body size="lg" className="p-5">
          <div className="d-flex flex-column align-items-center justify-content-center">
          <AiFillCheckCircle size={65} className="mb-4 text-info" />
          <p style={{fontSize: 24, fontFamily: "Lato-Bold"}}>Thanks for your order!</p>
          <p className="mb-0 text-monospace">Your payment was Successful, and your order is complete</p>
          <p className="mb-5 text-monospace" >A receipt will be sent to your inbox</p>
          <Button href="/orders" variant="info">Head back to your order</Button>
          </div>
        </Modal.Body>
      </Modal>
    )
}

export default PaymentSuccessCard
