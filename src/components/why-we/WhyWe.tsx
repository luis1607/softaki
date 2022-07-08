import { Fragment } from "react";

const WhyWe = ({ id }) => {
  const listData = [
    {
      title: "+5",
      subtitle: "mas de 5 años de experiencia",
    },
    {
      title: "50",
      subtitle: "profesores e instructores",
    },
    {
      title: "90%",
      subtitle: "de nuestros estudiantes alcanzan una vacante",
    },
  ];

  return (
    <Fragment>
      <div
        className="section-content pt-16 pb-28 px-8 h-full lg:h-1/2 flex flex-col items-center sm:h-full lg:pb-20  md:max-w-container mx-auto"
        id={id}
      >
        <h2 className="h-5% text-2xl font-bold">¿Por que nosotros?</h2>
        <div className="h-95% flex flex-col justify-between lg:flex-row lg:items-center lg:justify-between lg:w-full">
          {listData.map((item) => (
            <div className="lg:w-1/4" key={item.title}>
              <span className="text-font-72 block text-center font-bold text-blue-700">
                {item.title}
              </span>
              <span className="text-center block text-2xl font-bold">
                {item.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default WhyWe;
