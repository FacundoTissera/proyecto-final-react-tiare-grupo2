import Integrantes from "./Integrantes";
import fotoBea from '../assets/images/bea2021.png'
import fotoFacu from '../assets/images/facu2021.png'
import fotoLucas from '../assets/images/lucas2021.png'


let bea ={
            alias:"Bea",
            nombre: "Beatriz Hambeck",
            imagen: fotoBea,
            email: "bhambeck@gmail.com",
            descripcion:"Empezando a entender que es un objeto literal"
        }
let lucas ={
    alias:"Lucas",
    nombre: "Lucas Rivero",
    imagen: fotoLucas,
    email: "lucas@gmail.com",
    descripcion:"Aprendiendo a programar"
}
let facundo ={
    alias:"Facu",
    nombre: "Facundo Tissera",
    imagen: fotoFacu,
    email: "facu@gmail.com",
    descripcion:"Programando"
}
let genios =[bea, facundo, lucas]
// let imagen=[fotoBea, fotoLucas, fotoFacu]

function QuienesSomos(){
    return(
          <div className="cuadrosNosotros">
                {genios.map((element, i)=>{
                       return <Integrantes info ={element} key={i}/>
                     })
                }
        </div>
    )
};

export default QuienesSomos;