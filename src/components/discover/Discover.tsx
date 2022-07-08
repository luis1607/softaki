import { Fragment } from "react";
import Escude1 from "../../shared/imgs/discover1.png";
import Escude2 from "../../shared/imgs/discover2.png";
import Escude3 from "../../shared/imgs/discover3.png";
import Escude4 from "../../shared/imgs/discover4.png";

const Discover = ({ id }) => {
  return (
    <Fragment>
      <div
        className=" bg-[#E5E5E5] px-9 py-5 relative flex flex-col gap-4 lg:items-center"
        id={id}
      >
        <h2 className="h-5% text-2xl font-bold text-center">
          Descubre lo que te enseñaremos
        </h2>
        <p className="text-center lg:w-2/3">
          Conoce más sobre nuestros horarios, los asignaturas que dictaremos y
          los pasos para matricularte descargando el temario de la Escuela a
          donde desees postular.{" "}
        </p>
        <div className="flex flex-col gap-7 lg:flex-row lg:justify-center lg:gap-11">
          <div className="bg-white p-7 flex flex-col items-center gap-4 rounded-3xl">
            <span className="text-3xl font-bold">Oficiales</span>
            <div className="grid grid-cols-2 justify-center items-center">
              <img className="justify-self-center" src={Escude1}  alt=""/>
              <img className="justify-self-center" src={Escude2}  alt=""/>
              <img className="justify-self-center" src={Escude3}  alt=""/>
              <img className="justify-self-center" src={Escude4}  alt=""/>
            </div>
            <button className="bg-red-600 p-4 text-white rounded-xl w-1/2">
              Descargar Temario
            </button>
          </div>

          <div className="bg-white p-7 flex flex-col items-center gap-4 rounded-3xl">
            <span className="text-3xl font-bold">Oficiales</span>
            <div className="grid grid-cols-2 justify-center items-center">
              <img className="justify-self-center" src={Escude1}  alt=""/>
              <img className="justify-self-center" src={Escude2}  alt=""/>
              <img className="justify-self-center" src={Escude3}  alt=""/>
              <img className="justify-self-center" src={Escude4}  alt=""/>
            </div>
            <button className="bg-red-600 p-4 text-white rounded-xl w-1/2">
              Descargar Temario
            </button>
          </div>

          <div className="bg-white p-7 flex flex-col items-center gap-4 rounded-3xl">
            <span className="text-3xl font-bold">Oficiales</span>
            <div className="grid grid-cols-2 justify-center items-center">
              <img className="justify-self-center" src={Escude1}  alt="" />
              <img className="justify-self-center" src={Escude2}  alt=""/>
              <img className="justify-self-center" src={Escude3}  alt=""/>
              <img className="justify-self-center" src={Escude4}  alt=""/>
            </div>
            <button className="bg-red-600 p-4 text-white rounded-xl w-1/2">
              Descargar Temario
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Discover;
