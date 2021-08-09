import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Parrafo from './Parrafo';

function AcercaDe() {
    return(
    <div className="flex flex-col justify-between">
        <NavBar/>
            <div className="w-full flex flex-col items-center my-4" >
                <div className="font-bold text-4xl sm:text-6xl p-8 " >
                    Finca Monte Carlo
                </div>

                <img src="https://raw.githubusercontent.com/Yovany1998/MenuDigitalFMC/main/src/img/logo.png" className="w-full"/>  

                <div className="p-8" >
                    <div className="w-full flex flex-col items-center my-4" >
                        <h1 className="font-bold text-2xl sm:text-4xl " >Mision</h1>
                    </div>
                    <div>
                        <Parrafo 
                            texto="Somos una empresa dedicada y comprometida con el desarrollo del turismo a nivel regional, ofreciendo a nuestros clientes servicios de alta calidad, comodidad y seguridad creando en ellos la satisfacción total y dándonos a conocer por nuestra innovación y atención única en nuestra localidad. "
                        />                       
                    </div>
                </div>
                
                <div className="p-8" >
                    <div className="w-full flex flex-col items-center my-4" >
                        <h1 className="font-bold text-2xl sm:text-4xl" >Vision</h1>
                    </div>
                    <div>
                        <Parrafo 
                            texto="Para el 2025 ser una empresa líder a nivel regional fomentando el desarrollo empresarial y turístico, ser reconocidos por la continua innovación de nuestros servicios, comprometiéndonos a satisfacer y exceder todas las expectativas de nuestros clientes."
                        />                       
                    </div>
                </div>
            </div>
          
        <Footer/>
    </div>)
}
export default AcercaDe;