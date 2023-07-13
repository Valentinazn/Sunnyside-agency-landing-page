import Nav from "../Nav";
import "./style.css";
import Logo from "/images/logo.svg";

interface IAboveTheFold {
  title: string;
  img: string;
}

const AboveTheFold = (props: IAboveTheFold) => {
  return (
    <div className="bg-above-the-fold">
      <Nav
        img={Logo}
        linkAbout="About"
        linkServices={"Services"}
        linkProject={"Projects"}
        linkContact={"Contact"}
      />

      <div className=" flex flex-col justify-center items-center sm:gap-[86.54px] gap-[52px] min-h-[50%] max-w-screen-2xl w-[90%] my-0 mx-auto">
        <h1 className="font-fraunces font-black text-[40px] text-center md:text-[56px] text-white uppercase tracking-[6.75px] md:tracking-[8.75px]">
          {props.title}
        </h1>
        <img src={props.img} />
      </div>
    </div>
  );
};

export default AboveTheFold;
