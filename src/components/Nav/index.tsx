import { useState } from "react";
import Hamburger from "../Hamburger";
import "./style.css";

interface INav {
  img: string;
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
      <div className="flex w-[100%] items-center justify-between  mx-auto max-w-7xl">
        <a href="http://localhost:5173/">
          <img src={props.img} alt="logo" />
        </a>

        <div
          className={` ${
            hamburgerIsOpen ? "visible" : "invisible"
          } header-menu p-10`}
        >
          <span className="triangle"></span>
          <ul
            className={` md:flex md:justify-center md:items-center gap-8 text-white md:visible`}
          >
            <li>
              <a href="#">{props.linkAbout}</a>
            </li>
            <li>
              <a href="#">{props.linkServices}</a>
            </li>
            <li>
              <a href="#">{props.linkProject}</a>
            </li>
            <button className="md:bg-white bg-yellow font-fraunces ">
              <a href="#">{props.linkContact}</a>
            </button>
          </ul>
        </div>

        <div className="block md:hidden" onClick={toggleClick}>
          <Hamburger />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
