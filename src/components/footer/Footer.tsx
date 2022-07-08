import { Fragment } from "react"
import FooterImg from "../../shared/imgs/footer-img.png"
import Ubication from '../../shared/imgs/ubication.png'
import Phone from '../../shared/imgs/phone.png'
import Mail from '../../shared/imgs/mail.png'
import Hour from '../../shared/imgs/hour.png'
import Face from '../../shared/imgs/face.png'
import Inst from '../../shared/imgs/insta.png'
import Youtu from '../../shared/imgs/youtube.png'


const Footer = ()=>{
    return(
        <Fragment>
            <div className="bg-[#595858]  text-white px-16 py-5 relative lg:flex z-20">
                <div className="absolute top-12 right-12 lg:static lg:w-1/5 lg:flex lg:justify-center lg:items-center ">
                    <img className="lg:h-26 lg:w-26" src={FooterImg}  alt=""/>
                </div>
                <div className="lg:flex lg:w-4/5 gap-9">
                    <div className="flex flex-col lg:w-1/3">
                    <span className="py-5 font-semibold ">Conocenos</span>
                    <ul >
                        <li>Aula virtual</li>
                        <li>Blog</li>
                    </ul>
                    </div>
                    <div className="flex flex-col gap-2 lg:w-1/3">
                        <span className="py-5 font-semibold">Contacto</span>
                        <div className="flex"><img className="h-6 w-6" src={Ubication} alt=""/>Alfredo Benavides 1944, piso 09, Miraflores 15048.</div>
                        <div className="flex"><img className="h-6 w-6" src={Phone} alt=""/>938 561 890</div>
                        <div className="flex"><img className="h-6 w-6" src={Mail} alt=""/>Ainfo@guideasesores.com</div>
                        <div className="flex"><img className="h-6 w-6" src={Hour} alt=""/>10 am a 7:30 pm</div>
                    </div>

                    <div className="flex flex-col gap-2 lg:w-1/3">
                        <span className="py-5 font-semibold">Redes</span>
                        <div className="flex gap-6">
                        <img src={Face}  alt=""/>
                        <img src={Inst}  alt=""/>
                        <img src={Youtu}  alt=""/>
                        </div>
                    </div>

                </div>
            </div>
            
        </Fragment>
    )
}

export default Footer