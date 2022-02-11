import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Tarjeta from './Tarjeta';

function Galeria(){
    return(
        <div>
            <NavBar/>
            <div className=" flex md:flex-row justify-items-center flex-col justify-between py-8 px-6">
                <Tarjeta
                    imagen="https://github.com/Yovany1998/MenuDigitalFMC/blob/main/src/img/foto%20de%20noche.jpeg?raw=true"
                    titulo="Vista nocturna"
                    descripcion="Paisajes de Gualcinse y su descripción"
                />
                <Tarjeta
                    imagen="https://github.com/Yovany1998/MenuDigitalFMC/blob/main/src/img/camping.jpeg?raw=true"
                    titulo="Camping"
                    descripcion="Paisajes de Gualcinse y su descripción"
                />
                <Tarjeta
                    imagen="https://github.com/Yovany1998/MenuDigitalFMC/blob/main/src/img/paisaje.jpeg?raw=true"
                    titulo="Vista de dia"
                    descripcion="Paisajes de Gualcinse y su descripción"
                />
            </div>

            <div className=" flex md:flex-row justify-items-center flex-col justify-between py-8 px-6">
                <Tarjeta
                    imagen="https://github.com/Yovany1998/MenuDigitalFMC/blob/main/src/img/paisaje1.jpeg?raw=true"
                    titulo="Mirador"
                    descripcion="Paisajes de Gualcinse y su descripción"
                />
                <Tarjeta
                    imagen="https://github.com/Yovany1998/MenuDigitalFMC/blob/main/src/img/pisina%20de%20noche.jpeg?raw=true"
                    titulo="Psisina de noche"
                    descripcion="Paisajes de Gualcinse y su descripción"
                />
                <Tarjeta
                    imagen="https://github.com/Yovany1998/MenuDigitalFMC/blob/main/src/img/foto%20de%20noche.jpeg?raw=true"
                    titulo="Vista nocturna"
                    descripcion="Paisajes de Gualcinse y su descripción"
                />
            </div>

            {/* <div className=" flex md:flex-row justify-items-center flex-col justify-between py-8 px-6">
                <Tarjeta
                    imagen="https://raw.githubusercontent.com/gustavo-exe/AppNASA/master/src/img/sun1.jpg"
                    titulo="El Sol"
                    descripcion="El Sol es la estrella en el centro del Sistema Solar. Es casi
                    esfera perfecta de plasma caliente, [18] [19] calentado hasta la incandescencia por fusión nuclear
                    reacciones en su núcleo, irradiando la energía principalmente como luz visible e infrarroja
                    radiación. Es, con mucho, la fuente de energía más importante para la vida en la Tierra.."
                />
                <Tarjeta
                    imagen="https://raw.githubusercontent.com/gustavo-exe/AppNASA/master/src/img/debris.jpg"
                    titulo="Basura Espacial"
                    descripcion="Es objetos desaparecidos hechos por humanos en el espacio, principalmente en la órbita de la Tierra, que no
                    ya tienen una función útil. Estos incluyen naves espaciales abandonadas - naves espaciales no funcionales
                    y etapas de vehículos de lanzamiento abandonados: escombros relacionados con la misión, y particularmente numerosos en
                    Órbita terrestre, restos de fragmentación de la ruptura de cuerpos de cohetes y naves espaciales abandonados."
                />
                <Tarjeta
                    imagen="https://github.com/gustavo-exe/AppNASA/blob/master/src/img/titan.jpg?raw=true"
                    titulo="Eclipse"
                    descripcion="Un eclipse lunar es un evento astronómico que sucede cuando la Tierra se interpone entre el Sol 
                    y la Luna, generando un cono de sombra que oscurece a la Luna. Para que suceda un eclipse, los dos cuerpos celestes,
                    la Tierra y la Luna, y la estrella, el sol; deben estar exactamente alineados o muy cerca de estarlo, de tal modo 
                    que la Tierra bloquee los rayos solares que llegan al satélite, por eso los eclipses lunares solo pueden ocurrir 
                    en la fase de luna llena."
                />
            </div> */}

            <Footer/>
        </div>
    )
}

export default Galeria;