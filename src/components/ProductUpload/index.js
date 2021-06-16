import React, {useState, useRef} from 'react'
import { Col, Button, Modal, Form, ProgressBar } from 'react-bootstrap';
import { formValidation as validate } from '../../services';

function ProductUpload(props) {
    
    //states
    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [color, setColor] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuanity] = useState("");
    const [productImages, setProductImages] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    
    //reference to input type file
    const fileInputRef = useRef();

    


    //form validation

    function productNameValidation() {
        return validate.nameValidation(submitted, productName);
    }

    function categoryValidation() {
        return validate.nameValidation(submitted, category);
    }

    function colorValidation() {
        return validate.nameValidation(submitted, color);
    }

    function descriptionValidation() {
        return validate.nameValidation(submitted, description);
    }

    function priceValidation() {
        return validate.checkOnlyNumber(submitted, price);
    }

    function quantityValidation() {
        return validate.checkOnlyNumber(submitted, quantity);
    }

    function productImagesValidation() {
        return validate.productImageValidation(submitted, productImages);
    }

    function checkAllValidity() {
        if(productNameValidation() && categoryValidation() && colorValidation() && descriptionValidation() 
        && priceValidation() && quantityValidation() && productImagesValidation()){
            return true;
        } else {
            return false;
        }
    }







   
    const hideModal = () => {
        props.closeModal();
    }
    

    //handles the submit 
    const handleProductSubmit = () => {
        setSubmitted(true);
        if(checkAllValidity && submitted){
            
        }
    }
    

    //to handle image upload
    const imageFileHandler = (e) => {
        setProductImages(e.target.files);
        // const fd = new FormData();
        // fd.append('image', productImages);
        // console.log('fd' + fd);
    }
   
    
    //to display images in modal
    const createImageArray = () => {

        let imageArray = [];

        for(let i=0; i<productImages.length; i++) {
            let url = window.URL.createObjectURL(productImages[i]);
            imageArray.push(<img src={url} width={100} height={100} className="mx-2" alt="..." />);
        }

        return imageArray;
    }

  
    


    return (
        <Modal
        show={props.showModal}
        onHide={hideModal}
        size="lg"
        backdrop="static"
    >
        <Modal.Header closeButton>
            <Modal.Title>Add product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ProgressBar className="mb-3" striped variant="success" now={40} />
            <Form onSubmit={handleProductSubmit}>
                <Form.Row>
                    <Form.Group as={Col} md={6} controlId="formGridName">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            value={productName}
                            placeholder="Product full name"
                            className={'form-control' + (!productNameValidation() && ' is-invalid')}
                            onChange={(e) => setProductName(e.target.value)}
                        />
                        {!productNameValidation() &&
                            <div className="invalid-feedback">Product Name is required</div>
                        }

                    </Form.Group>
                    <Form.Group as={Col} md={6} controlId="formGridCompanyName">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            type="text"
                            value={category}
                            placeholder="Product category like gadgets, cosmetics etc"
                            className={'form-control' + (!categoryValidation() && ' is-invalid')}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                        {!categoryValidation() &&
                            <div className="invalid-feedback">Category is required</div>
                        }

                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md={12} controlId="formGridName">
                        <Form.Label>Product description</Form.Label>
                        <Form.Control
                            type="text"
                            value={description}
                            placeholder="About this product"
                            className={'form-control' + (!descriptionValidation() && ' is-invalid')}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        {!descriptionValidation() &&
                            <div className="invalid-feedback">Product description is required</div>
                        }

                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md={4} controlId="formGridName">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="text"
                            value={price}
                            placeholder="Product price in INR"
                            className={'form-control' + (!priceValidation() && ' is-invalid')}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        {!priceValidation() &&
                            <div className="invalid-feedback">Product Price is required</div>
                        }

                    </Form.Group>
                    <Form.Group as={Col} md={4} controlId="formGridCompanyName">
                        <Form.Label>quantity</Form.Label>
                        <Form.Control
                            type="number"
                            value={quantity}
                            placeholder="No of products you currently have"
                            className={'form-control' + (!quantityValidation() && ' is-invalid')}
                            onChange={(e) => setQuanity(e.target.value)}
                        />
                        {!quantityValidation() &&
                            <div className="invalid-feedback">Quantity is required</div>
                        }

                    </Form.Group>
                    <Form.Group as={Col} md={4} controlId="formGridName">
                        <Form.Label>Product Color</Form.Label>
                        <Form.Control
                            type="text"
                            value={color}
                            placeholder="eg black, blue etc"
                            className={'form-control' + (!colorValidation() && ' is-invalid')}
                            onChange={(e) => setColor(e.target.value)}
                        />
                        {!colorValidation() &&
                            <div className="invalid-feedback">Product color is required</div>
                        }

                    </Form.Group>
                </Form.Row>

            </Form>
            <input ref={fileInput => fileInputRef.current = fileInput} className="d-none" type="file" multiple onChange={imageFileHandler} />
            <Form.Label>Product images: </Form.Label>
            {!productImagesValidation() &&  
                    <p className="text-danger">Maximum 4 is allowed</p>
            }
            <div onClick={() => fileInputRef.current.click()} className="d-flex rounded align-items-center justify-content-center" style={{backgroundColor: "rgba(112, 112, 112, 0.1)", height: 200, cursor: "pointer"}}>
             Select maximum 4 images to upload
            </div>
            {productImages.length > 0 && (
            <div className="p-3 mt-2 rounded" style={{backgroundColor: "rgba(112, 112, 112, 0.1)"}}>
            {createImageArray()}
            </div>
            )
            }
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={hideModal}>Close</Button>
            <Button variant="primary" onClick={handleProductSubmit}>Add product</Button>
        </Modal.Footer>
    </Modal>
    )
}

export default ProductUpload
