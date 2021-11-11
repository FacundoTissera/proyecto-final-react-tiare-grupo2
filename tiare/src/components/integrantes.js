import '../integrantes.css'
function Integrantes({info}){
    return(
            <div >
                    <table className="tablaNosotros">
                        <tr className="facu">
                            <td>{info.alias}</td>
                        </tr>
                        <tr>
                        <td><img className="fotosNosotros" src={info.imagen} alt="holis"  /></td>
                    </tr>
                    <tr>
                        <td>{info.nombre}</td>                       
                    </tr>                  
                    <tr>
                        <td>Email: {info.email}</td>                       
                    </tr>
                    <tr>
                        <td>{info.descripcion}</td>                   
                    </tr>
                </table>
                </div>
    )
};

export default Integrantes;