import { Fragment, useState } from "react";
import Img1 from "../../shared/imgs/img-ad1.png";
import Img2 from "../../shared/imgs/img-ad2.png";

const WeAddress = ({ id }) => {
  const [mouseEnter1, setMouseEnter1] = useState(true);
  const [mouseEnter2, setMouseEnter2] = useState(true);

  const enter1 = () => {
    console.log("enter");
    setMouseEnter1(false);
  };
  const exit1 = () => {
    setMouseEnter1(true);
  };
  const enter2 = () => {
    console.log("enter");
    setMouseEnter2(false);
  };
  const exit2 = () => {
    setMouseEnter2(true);
  };

  return (
    <Fragment>
      <div
        className="section-content  pt-16 pb-28 px-8 h-full lg:h-1/2 flex flex-col items-center sm:h-full md:max-w-container mx-auto"
        id={id}
      >
        <h2 className="h-15% text-2xl font-bold text-center">
          ¿A quienes nos dirigimos?
        </h2>
        <div className="h-85% flex flex-col justify-between lg:flex-row lg:w-10/12 lg:justify-around">
          <div>
            {mouseEnter1 ? (
              <div
                className="h-48 w-48 bg-[#8297E0] text-white rounded-full flex justify-center items-center cursor-pointer"
                onMouseEnter={enter1}
              >
                <img className="rounded-full w-full h-full" src={Img1} alt="" />
              </div>
            ) : (
              <div
                className="h-48 w-48 bg-[#8297E0] text-white rounded-full flex justify-center items-center cursor-pointer"
                onMouseLeave={exit1}
              >
                <span className="text-center">
                  Jovenes que desean postular a la escuela de oficiales y
                  suboficiales FF.AA (servicio militar)
                </span>
              </div>
            )}
            <span className="text-center block text-2xl font-bold">
              Civiles
            </span>
          </div>
          <div>
            {mouseEnter2 ? (
              <div
                className="h-48 w-48 bg-[#8297E0] text-white rounded-full flex justify-center items-center cursor-pointer"
                onMouseEnter={enter2}
              >
                <img className="rounded-full w-full h-full" src={Img2} alt="" />
              </div>
            ) : (
              <div
                className="h-48 w-48 px-3 bg-[#8297E0] text-white rounded-full flex justify-center items-center cursor-pointer "
                onMouseLeave={exit2}
              >
                <span className="text-9px text-center">
                  Si estás prestando servicio militar o eres Licenciado y
                  quieres postular a una Escuela de Oficiales y Sub oficiales
                  (FF. AA), tenemos descuentos exclusivos para ti, gracias a
                  nuestro convenio con las FF. AA.
                </span>
              </div>
            )}
            <span className="text-center block text-2xl font-bold">
              Servicio Militar
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WeAddress;
