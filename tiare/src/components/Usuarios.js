import React, {Component} from 'react';
class  Usuarios extends Component{
    constructor(){
        super()
        this.state = {
            usuarios:[]
           
        }
    }
    componentDidMount(){
        fetch('/api/user')
        .then(response =>{
            return response.json()
        })
        .then(usuarios=>{
            this.setState({
                usuarios:usuarios.data.users})
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
                                <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                            
                   {
                   this.state.usuarios.map((usuario, i)=>{
                     return (
                        <tr key={i}>
                            <td>{usuario.id}</td>
                            <td>{usuario.name}</td>
                            <td>{usuario.email}</td>
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
export default Usuarios;