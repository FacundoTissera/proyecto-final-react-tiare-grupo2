

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap'
import carrousel1 from '../../assets/images/carrousel1.png'
import carrousel2 from '../../assets/images/carrousel2.png'
import carrousel3 from '../../assets/images/carrousel3.png'


const Carrucel = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={carrousel1}
                alt="First slide"
                />
                <Carousel.Caption>
                    {/* Aca se le puede poner texto que puede aparecer en las imagenes */}
                {/* <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src={carrousel2}
                alt="Second slide"
                />
                <Carousel.Caption>
                     {/* Aca se le puede poner texto que puede aparecer en las imagenes */}
                {/* <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={carrousel3} alt="Third slide" />
                <Carousel.Caption>
                     {/* Aca se le puede poner texto que puede aparecer en las imagenes */}
                {/* <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
</Carousel>
    )
}
export default Carrucel