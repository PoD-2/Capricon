import React from 'react';
import MessageCard from '../../components/MessageCard';
import { Button } from 'react-bootstrap';

function ErrorPage() {
    return (
        <div>
           <MessageCard message="404 Page Not Found" />
           <div className="d-flex justify-content-center">
           <Button href="/" className="" variant="dark">Head Back to Home Page</Button>
           </div>
           
        </div>
    )
}

export default ErrorPage
