import React, {Component} from 'react';
import UltimoProducto from './UltimoProducto';
class ResumenProductos extends Component{
    constructor(){
        super()
        this.state = {
            resumen:[],
            categories: []
           
        }
    }
    componentDidMount(){
        fetch('/api/products')
        .then(response =>{
            return response.json()
        })
        .then(productos=>{
             console.log (productos.meta)
            this.setState({
                resumen:productos.meta,
                categories: productos.meta.countByCategory
            })
        })
        .catch(error =>{console.log('Se encontró un error' + error)})
    }
    render(){
        return(
            <div>

            <section className="secciones-articulos">
                <article className="articulos-linea1 "> 
                <UltimoProducto />
                     <div className="articulos-index">
                        <h3>Total Productos: {this.state.resumen.count}</h3>
                        <h3>Total Categorías: {Object.keys(this.state.categories).length}</h3>
                            <div className="descripciones">  
                                <p> {Object.keys(this.state.categories).sort().map((categoria, i) => {
                                    return (<div>{categoria}: {this.state.categories[categoria]}</div> )            
                                })
                            }</p>
                            </div>                         
                    </div>      
                </article>
            </section>
        </div>
        )       
                 
    }
};
export default ResumenProductos;