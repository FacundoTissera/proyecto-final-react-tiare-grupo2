import carrusel from '../assets/images/carrusel1.png'

function Inicio() {
    return(
        
        <div>
            <main>
            <img style={{width: 96 +'%'}} src={carrusel} alt="carrusel" />
            <h2 className="titulo-productos">NUESTROS PRODUCTOS</h2>
            <seccion className="secciones-articulos">
                <article className="articulos-linea1">
                    <div className="articulos-index">
                        <div class="foto-producto">
                            {/* <img className="foto-producto" style={{width: 96 +'%'}} src={algo} alt="Foto Producto Tiare" /> */}
                        </div>
                        <div className="descripciones">
                            <p> Aca va la descripcion(nombre) producto</p>
                        </div>
                        <div className="precios">
                            <p> Aca va el precio del producto</p>
                        </div>
                        <div className="loQuiero">
                            <p>aca va el boton que redireccione al producto detalle</p>
                        </div>
                    </div>
                </article>
            </seccion>
            </main>
        </div>

    );
}
export default Inicio;