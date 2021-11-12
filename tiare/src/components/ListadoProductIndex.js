import React, {Component} from 'react';
import carrusel from '../assets/images/carrusel1.png'
import '../assets/css/styleInicio.css'
//aca voy a crear las apis que pegen en el inicio..
class ListadoProductsIndex extends Component{

        constructor(props){
            super(props);
            this.state ={
                producto: [],
            }
        }

        apiCall(url,consecuencia){
            fetch(url)
            .then( response => response.json())
            .then(data => consecuencia(data))
            .catch(error => console.log(error))
        }

        mostrarProducto = (data) =>{
            console.log(data);
            this.setState({
                producto: data.data.producto
            })
                
            
        }

        componentDidMount(){
            this.apiCall('/api/products/todos', this.mostrarProducto)
        }

    render(){


        
      
        return(
            <div>
              <main>
            <img style={{width: 96 +'%'}} src={carrusel} alt="carrusel" />

            <h2 className="titulo-productos">NUESTROS PRODUCTOS</h2>
            <seccion className="secciones-articulos">
                <article className="articulos-linea1"> 
               
                    {this.state.producto.map((producto, i )=>{
                        return(
                            i < 8 ? 
                            <div  key ={i} className="articulos-index">
                            <div class="foto-producto">
                            <img className="foto-producto" src={producto.image} alt="Foto Producto Tiare" /> 
                            </div>
                            
                            <div className="descripciones">
                            <p> {producto.name}</p>
                            </div>
                            <div className="precios">
                            
                            <p> $ {producto.price}</p>
                            </div>
                            <div className="loQuiero">
                            <p>LO QUIERO!</p>
                            </div>
                            </div> : null
                            )
                })}
        
                </article>
            </seccion>
            </main>
            </div>
        )
    }
}
export default ListadoProductsIndex;