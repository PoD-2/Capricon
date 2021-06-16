import React from 'react'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import ProductImage from '../../images/shoeImg.jpeg'

function SellerProductCard() {
  return (
    <div>
      <Card style={{ width: '20rem', marginBottom: 30 }}>
        <Card.Img variant="top" src={ProductImage} />
        <Card.Body>
          <Card.Title>Jordan Delta 2</Card.Title>
          <Card.Text>
          The Jordan Delta 2 offers a fresh, fearless take on the features you want
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Price: $29</ListGroupItem>
          <ListGroupItem>Current quantity: 24</ListGroupItem>
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
