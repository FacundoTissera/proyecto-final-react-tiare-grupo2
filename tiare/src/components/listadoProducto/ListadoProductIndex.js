import React, { Component } from "react";
//import Carrucel from './Carrucel';
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "../../assets/css/styleInicio.css";
import carrousel1 from "../../assets/images/carrousel1.png";
import carrousel2 from "../../assets/images/carrousel2.png";
import carrousel3 from "../../assets/images/carrousel3.png";

//aca voy a crear las apis que pegen en el inicio..
class ListadoProductsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      producto: [],
    };
  }

  apiCall(url, consecuencia) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => consecuencia(data))
      .catch((error) => console.log(error));
  }

  mostrarProducto = (data) => {
    console.log(data);
    this.setState({
      producto: data.data.producto,
    });
  };

  componentDidMount() {
    this.apiCall("/api/products/todos", this.mostrarProducto);
  }

  render() {
    return (
      <div>
        <main>
          {/* <img style={{width: 96 +'%'}} src={carrusel} alt="carrusel" /> */}
          {/* <Carrucel /> */}
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
              <img
                className="d-block w-100"
                src={carrousel3}
                alt="Third slide"
              />
              <Carousel.Caption>
                {/* Aca se le puede poner texto que puede aparecer en las imagenes */}
                {/* <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <h2 className="titulo-productos">NUESTROS PRODUCTOS</h2>
          <section className="secciones-articulos">
            <article className="articulos-linea1">
              {this.state.producto.map((producto, i) => {
                return i < 8 ? (
                  <div key={i} className="articulos-index">
                    <div className="foto-producto">
                      <img
                        className="foto-producto"
                        src={producto.image}
                        alt="Foto Producto Tiare"
                      />
                    </div>

                    <div className="descripciones">
                      <p> {producto.name}</p>
                    </div>
                    <div className="precios">
                      <p> $ {producto.price}</p>
                    </div>
                    <div className="loQuiero">
                      <p className="buton-quiero display: contents;">LO QUIERO!</p>
                    </div>
                  </div>
                ) : null;
              })}
            </article>
          </section>
        </main>
      </div>
    );
  }
}
export default ListadoProductsIndex;
