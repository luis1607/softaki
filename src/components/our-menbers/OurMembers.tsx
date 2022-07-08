import { Fragment} from "react";
import ImgLast1 from "../../shared/imgs/img-last1.png";
import Star from "../../shared/imgs/star.png";
import ArrowLeft from "../../shared/imgs/arrow-left.png";
import ArrowRight from "../../shared/imgs/arrow-right.png";

const OurMembers = ({ id }) => {
  return (
    <Fragment>
      <div
        className="section-content bg-[#E5E5E5] pt-16 pb-28 px-8 h-full flex flex-col items-center sm:h-full"
        id={id}
      >
        <div className="lg:w-container">
          <h2 className="text-2xl font-bold text-center">
            Conoce a nuestros integrantes
          </h2>

          <div className="mt-11 flex gap-10 lg:items-center">
            <img className="h-10 w-10 hidden lg:block" src={ArrowLeft} alt="" />

            <div className="bg-white rounded-xl p-8 hidden lg:block">
              <span className="text-justify block">
                Gracias a GUIDE logré mi ingreso.Lo que más me gustó fueron los
                profesores y las clases grabadas.
              </span>
              <div className="flex mt-7 items-center">
                <div className="inlineblock">
                  <img src={ImgLast1}  alt=""/>
                </div>
                <span className="p-5">Erick Arancibia Ingresante ESOFA</span>
              </div>
              <div className="flex justify-center gap-2">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-8">
              <span className="text-justify block">
                Gracias a GUIDE logré mi ingreso.Lo que más me gustó fueron los
                profesores y las clases grabadas.
              </span>
              <div className="flex mt-7 items-center">
                <div className="inlineblock">
                  <img src={ImgLast1} alt="" />
                </div>
                <span className="p-5">Erick Arancibia Ingresante ESOFA</span>
              </div>
              <div className="flex justify-center gap-2">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 hidden lg:block">
              <span className="text-justify block">
                Gracias a GUIDE logré mi ingreso.Lo que más me gustó fueron los
                profesores y las clases grabadas.
              </span>
              <div className="flex mt-7 items-center">
                <div className="inlineblock">
                  <img src={ImgLast1} alt="" />
                </div>
                <span className="p-5">Erick Arancibia Ingresante ESOFA</span>
              </div>
              <div className="flex justify-center gap-2">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </div>
            </div>

            <img className="h-10 w-10 hidden lg:block" src={ArrowRight} alt="" />
          </div>

          <div className="mt-12 flex justify-center gap-5 lg:hidden">
            <img className="h-10 w-10" src={ArrowLeft} alt="" />
            <img className="h-10 w-10" src={ArrowRight} alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default OurMembers;
