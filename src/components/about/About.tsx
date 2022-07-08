import { Fragment } from "react"
import MilitarImg from '../../shared/imgs/tropa-img.png'
import ImgAbout from '../../shared/imgs/img2-about.png'

const About = ({id})=>{
    return(
        <Fragment>
      <div className="section-content h-full md:max-w-container mx-auto" id={id}>
        <div className="h-2/5 sm:h-1/2 relative flex justify-center">
            <div className="absolute md:static sm:w-1/2 bg-white top-0 h-full flex flex-col justify-evenly items-center px-10 max-w-ms-container" style={{backgroundColor: "rgba(255,255,255,0.6)"}}>
                <h1 className="text-3xl text-center font-bold md:text-4xl  lg:px-12">PREPARATE PARA INGRESAR A LAS ESCUELAS DE LAS FF.AA O PNP</h1>
                <button className="bg-red-600 text-white text-xl w-36 rounded-xl h-8 sm:h-16 sm:w-48 sm:rounded-3xl">INSCRIBIRME</button>
            </div>
            <div className="h-full w-4/5 sm:w-1/2 lg:flex justify-center">
                <img  className="h-full w-full lg:w-4/5" src={MilitarImg} alt=""/>

            </div>
        </div>
        <div className="h-3/5 sm:h-1/2 flex flex-col sm:flex-row justify-center items-center text-justify px-10 py-4  sm:gap-24 md:gap-24">
            <div>
            <h1 className=" md:text-4xl font-bold text-center lg:pb-10">Acerca de GUIDE</h1>
            <p className="md:text-base font-normal lg:px-12">Somos una academia de preparación exclusiva para jóvenes que están próximos a 
            postular a una escuela de Oficiales, Sub Oficiales, Beca 18 y el IESTFFAA. Contamos
            con la mejor plana de docentes e instructores con amplia experiencia en el uso de 
            herramientas digitales, además de tener un moderno método de enseñanza que garantizarán
            resultados positivos.</p>
            </div>
            <div>
            <div className="w-60 h-40 mt-6 lg:w-img-width-about lg:h-64">
            <img className="w-full h-full" src={ImgAbout}  alt=""/>
            </div>    
            
        </div>
        </div>
        
      </div>

        </Fragment>
    )
}

export default About