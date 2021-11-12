import React, {Component} from 'react';

class ResumenUsuarios extends Component{
    constructor(){
        super()
        this.state = {
            resumen:[],
           
        }
    }
    componentDidMount(){
        fetch('/api/user')
        .then(response =>{
            return response.json()
        })
        .then(usuarios=>{
             console.log (usuarios.meta)
            this.setState({
                resumen:usuarios.meta,
            })
        })
        .catch(error =>{console.log('Se encontró un error' + error)})
    }
    render(){
        return(
            <seccion className="secciones-articulos">
                <article className="articulos-linea1 "> 
                     <div className="articulos-index">
                        <h3>Total Usuarios: {this.state.resumen.total}</h3>
                        </div>
                </article>
            </seccion>
        )       
                 
    }
};
export default ResumenUsuarios;