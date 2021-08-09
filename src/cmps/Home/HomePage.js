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
               imagen="https://raw.githubusercontent.com/Yovany1998/MenuDigitalFMC/main/src/img/Sanwhich%20cubano.jpg"
               titulo="sandwich cubano"
               descripcion="Precio: L.100.00"
               />
               <Card 
               imagen="https://raw.githubusercontent.com/Yovany1998/MenuDigitalFMC/main/src/img/Sanwhich.jpg"
               titulo="Sandwich"
               descripcion="Precio: L.60.00"
               />
               <Card 
               imagen="https://raw.githubusercontent.com/Yovany1998/MenuDigitalFMC/main/src/img/alitas.jpeg"
               titulo="Alitas 12 unidades"
               descripcion="Precio: L.160.00"
               />
               <Card 
               imagen="https://raw.githubusercontent.com/Yovany1998/MenuDigitalFMC/main/src/img/panqueques.jpeg"
               titulo="Panqueques"
               descripcion="Precio: L.35.00"
               />
               <Card 
               imagen="https://raw.githubusercontent.com/Yovany1998/MenuDigitalFMC/main/src/img/perros%20calientes.jpg"
               titulo="Perro Caliente"
               descripcion="Precio: L.60.00"
               />
               <Card 
               imagen="https://raw.githubusercontent.com/Yovany1998/MenuDigitalFMC/main/src/img/pollo%20asado.jpeg"
               titulo="Pollo asado"
               descripcion="Precio: L.60.00"
               />
               <Card 
               imagen="https://raw.githubusercontent.com/Yovany1998/MenuDigitalFMC/main/src/img/tacos%202%20unidades.jpg"
               titulo="Tacos 2 unidades"
               descripcion="Precio: L.50.00"
               />  
           </div>
            <Footer/>

        </div>

        
        
    )
}

export default HomePage;