import React from 'react'
import ResultCard from '../../components/ResultCard'
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar';
import { Container } from 'react-bootstrap'


function ProductResults() {
    return (
        <>
        <NavBar/>
        <Container>
        <p style={{fontSize:20}} className="mb-5">Search Results for: Smart Phones</p>
        <ResultCard/>
        <ResultCard/>
        <ResultCard/>
        <ResultCard/>
        <ResultCard/>
       </Container>
       <Footer/>
       </>
    )
}

export default ProductResults