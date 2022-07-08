import { Fragment } from "react"
import BtnWasap from '../../shared/imgs/wasap.png'

const BtnHelp = ()=>{
    return(
        <Fragment>
            <div className="flex fixed items-center text-white left-5 bottom-6 bg-[#00E676] px-2 py-1 rounded-3xl z-10">
                <img className="h-8 w-8" src={BtnWasap}  alt=""/>
                <span>¿En que podemos ayudarte?</span>
            </div>
        </Fragment>
    )
}

export default BtnHelp