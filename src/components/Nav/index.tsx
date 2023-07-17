import { useState } from "react";
import Hamburger from "../Hamburger";
import "./style.css";
import LogoSvg from "../../assets/svg/LogoSvg";

export interface INav {
  linkAbout: string;
  linkServices: string;
  linkProject: string;
  linkContact: string;
}

const Nav = (props: INav) => {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState<boolean>(false);

  const toggleClick = () => {
    setHamburgerIsOpen(!hamburgerIsOpen);
  };
  return (
    <nav className="flex my-0 mx-auto w-[90%] py-7  md:py-0 ">
      <div className="flex w-[100%] items-center justify-between  mx-auto max-w-screen-2xl">
        <a href="https://sunnyside-agency-landing-page-vz.netlify.app/">
          <LogoSvg color="white" />
        </a>

        <div
          className={` ${
            hamburgerIsOpen ? "visible" : "invisible"
          } header-menu py-8`}
        >
          <span className="triangle"></span>
          <ul
            className={`sm:flex sm:justify-center sm:items-center gap-8 text-white sm:visible`}
          >
            {[props.linkAbout, props.linkServices, props.linkProject].map(
              (i) => {
                return (
                  <li key={i}>
                    <a href="#">{i}</a>
                  </li>
                );
              }
            )}
            <button className="sm:bg-white bg-yellow font-fraunces ">
              <a href="#">{props.linkContact}</a>
            </button>
          </ul>
        </div>

        <div className="block sm:hidden" onClick={toggleClick}>
          <Hamburger />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
