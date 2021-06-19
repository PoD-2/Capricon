import React from 'react'
import { Card, ListGroup, ListGroupItem, Button, Carousel, Image } from 'react-bootstrap';

function SellerProductCard(props) {
  return (
    <div>
      <Card style={{ width: '20rem', marginBottom: 30 }}>
        <Carousel interval={null}>
        {props.images && props.images.length !== 0 && (
          props.images.map((item) => (
            <Carousel.Item>
              <Image
                src={item.fileUrl}
                alt="First slide"
                style={{height: 280, width: '100%'}}

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
        <Button variant="dark">Add Quantity</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SellerProductCard
