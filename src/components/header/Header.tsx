import { Fragment, useState } from "react";
import { Link} from "react-scroll";
import Logo from "../../shared/imgs/logo.png";
import BtnMenu from "../../shared/imgs/btn-menu.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const clickBtnMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Fragment>
      <div className="bg-blue-800 flex justify-between items-center px-3 py-2 fixed top-0 left-0 z-30 w-full h-h-head sm:h-24">
        <div className="flex justify-between w-full md:w-container mx-auto">
          <div className="h-11 w-11 sm:h-logo sm:w-logo">
            <img className="h-full w-full text-" src={Logo}  alt=""/>
          </div>
          <div className="block sm:hidden">
            <span className="block text-white text-font-mobile text-center mb-1 sm:text-9px sm:font-semibold">
              antes de matricularte obten una
            </span>
            <button className="bg-red-600 text-center text-white text-sm w-28 rounded-xl h-6 sm:h-10 sm:w-40">
              CLASE GRATIS
            </button>
          </div>
          <div className="flex gap-4">
            <div className="hidden sm:block">
              <span className="block text-white text-font-mobile text-center mb-1 sm:text-9px sm:font-semibold">
                antes de matricularte obten una
              </span>
              <button className="bg-red-600 text-center text-white text-sm w-28 rounded-xl h-6 sm:h-10 sm:w-40">
                CLASE GRATIS
              </button>
            </div>

            <div
              className="h-11 w-11 sm:h-logo sm:w-logo bg-white rounded-3xl sm:relative lg:flex"
              onClick={clickBtnMenu}
            >
              <img
                src={BtnMenu}
                className="h-full w-full rounded-lg cursor-pointer"
                alt=""
              />
              <nav
                className={
                  showMenu
                    ? "block fixed top-16 left-0 z-20 w-full bg-white p-8 sm:absolute sm:-left-60 sm:w-80 sm:top-20 sm:opacity-90 rounded-b-3xl"
                    : "hidden"
                }
                id="navbar"
              >
                <div>
                  <ul>
                    <li>
                      <Link
                        className="block py-3 px-0 cursor-pointer border-b-2 border-black"
                        activeClass="active"
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => setShowMenu(false)}
                      >
                        Acerca de GUIDE
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block py-3 px-0 cursor-pointer border-b-2 border-black"
                        activeClass="active"
                        to="section2"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => setShowMenu(false)}
                      >
                        ¿Por que nosotros?
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block py-3 px-0 cursor-pointer border-b-2 border-black"
                        activeClass="active"
                        to="section3"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => setShowMenu(false)}
                      >
                        ¿A quienes nos dirigimos?
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block py-3 px-0 cursor-pointer border-b-2 border-black"
                        activeClass="active"
                        to="section4"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => setShowMenu(false)}
                      >
                        Descubre lo que te enseñaremos
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block py-3 px-0 cursor-pointer"
                        activeClass="active"
                        to="section5"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => setShowMenu(false)}
                      >
                        Nuestros Integrantes
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
