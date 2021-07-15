import DatoEstadistico from './DatoEstadistico';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Card from '../Card/Card';

import '../../css/HomePage.css';


function HomePage() {
    return(
        <div className="ContenedorConImagen flex flex-col justify-between" >
            <NavBar/>

            <div style={{minHeight:"100vh"}} className="p-10   md:py-20 sm:py-10 flex flex-col justify-between" >
                <p className="w-90 sm:w-100 font-bold text-4xl sm:text-8xl uppercase" >
                Un lugar para disfrutar con familia y amigos
                </p>

                <div className="w-40 my-10  flex flex-wrap sm:w-80 " >
                    <DatoEstadistico
                        cantidad="1,354"
                        descripcion="Altura Sobre el nivel del mar"
                    />
                    <DatoEstadistico
                        cantidad="163 km² En su totalidad"
                        descripcion="Superficie de Gualcinse"
                    />
                </div>
            </div>
           <div>
               <Card 
               imagen="https://raw.githubusercontent.com/gustavo-exe/AppNASA/master/src/img/sol.png"
               titulo="Sol"
               descripcion="El Sol ​ es una estrella de tipo-G de la secuencia principal y clase de luminosidad V que se encuentra en el centro del sistema solar y constituye la mayor fuente de radiación electromagnética de este sistema planetario."
               />
               <Card 
               imagen="https://raw.githubusercontent.com/gustavo-exe/AppNASA/master/src/img/tierra.png"
               titulo="Tierra"
               descripcion="La Tierra es un planeta del sistema solar que gira alrededor de su estrella —el Sol— en la tercera órbita más interna. Es el más denso y el quinto mayor de los ocho planetas del sistema solar. También es el mayor de los cuatro terrestres o rocosos. "
               />
               <Card 
               imagen="https://raw.githubusercontent.com/gustavo-exe/AppNASA/master/src/img/luna.png"
               titulo="Luna"
               descripcion="La Luna es el único satélite natural de la Tierra. Con un diámetro ecuatorial de 3476 km, es el quinto satélite más grande del sistema solar, mientras que en cuanto al tamaño proporcional respecto a su planeta es el satélite más grande: un cuarto del diámetro de la Tierra y 1/81 de su masa. "
               />
               <Card 
               imagen="https://raw.githubusercontent.com/gustavo-exe/AppNASA/master/src/img/saturno.png"
               titulo="Saturno"
               descripcion="Saturno es el sexto planeta del sistema solar contando desde el Sol, el segundo en tamaño y masa después de Júpiter y el único con un sistema de anillos visible desde la Tierra. Su nombre proviene del dios romano Saturno. Forma parte de los denominados planetas exteriores o gaseosos."
               />

              
           </div>
            <Footer/>

        </div>

        
        
    )
}

export default HomePage;