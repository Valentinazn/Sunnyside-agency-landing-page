import Nav from "../Nav";
import "./style.css";
import Logo from "/images/logo.svg";

interface IAboveTheFold {
  title: string;
  img: string;
}

const AboveTheFold = (props: IAboveTheFold) => {
  return (
    <>
      <Nav
        img={Logo}
        linkAbout="About"
        linkServices={"Services"}
        linkProject={"Projects"}
        linkContact={"Contact"}
      />

      <div className="">
        <h1 className="">{props.title}</h1>
        <img src={props.img} />
      </div>
    </>
  );
};

export default AboveTheFold;
