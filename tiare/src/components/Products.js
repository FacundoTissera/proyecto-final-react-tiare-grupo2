import React, {Component} from 'react';
class  Products extends Component{
    constructor(){
        super()
        this.state = {
            productos:[]
           
        }
    }
    componentDidMount(){
        fetch('/api/products')
        .then(response =>{
            return response.json()
        })
        .then(productos=>{
            console.log (productos.data)
            this.setState({
                productos:productos.data.products})
        })
        .catch(error =>{console.log('Se encontró un error' + error)})
    }
    render(){
        return(
            <div>  
                <main className= "listado-productos" >  
                    <article className="listado-edit">
                        <table className="tabla">
                            <thead>
                                <tr className='columnas'>
                                <th scope="col">Id</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Categoria</th>
                                <th scope="col">Descripción</th>
                                </tr>
                            </thead>
                            <tbody>
                            
                   {
                   this.state.productos.map((producto, i)=>{
                     return (
                        <tr key={i}>
                            <td>{producto.id}</td>
                            <td>{producto.name}</td>
                            <td>{producto.category}</td>
                            <td>{producto.description}</td>
                        </tr>
                        )
                   })
                   }        
                   
                            </tbody>
                        </table> 
                    </article>       
                </main>  
            </div>
        )   
    }
};
export default Products;