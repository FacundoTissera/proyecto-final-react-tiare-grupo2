import React, {Component} from 'react';

class UltimoProducto extends Component{
    constructor(){
        super()
        this.state = {
            ultimo:{}
           
        }
    }
    componentDidMount(){
        fetch('/api/products/todos')
        .then(response =>{
            return response.json()
        })
        .then(productos=>{
            // console.log (productos.data)
            this.setState({
                ultimo:productos.data.producto.pop()})
        })
        .catch(error =>{console.log('Se encontró un error' + error)})
    }
    render(){
        return(
            <seccion className="secciones-articulos">
                <article className="articulos-linea1"> 
                     <div className="articulos-index">
                        <h3>Ultimo producto</h3>
                            <div className="descripciones">
                                <p> {this.state.ultimo.name}</p>
                            </div>
                            <div className="foto-producto">
                                <img className="foto-producto" src={this.state.ultimo.image} alt="Foto" /> 
                            </div>
                            <div className="precios">
                                <p> $ {this.state.ultimo.price}</p>
                            </div>
                    </div>      
                </article>
            </seccion>
        )       
                 
    }
};
export default UltimoProducto;