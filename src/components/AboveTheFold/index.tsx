import Nav from "../Nav";
import "./style.css";
import Arrow from "../../../public/images/icon-arrow-down.svg";

const AboveTheFold = () => {
  return (
    <div className=" container-fluid  bg-above-the-fold">
      <Nav />
      <div className="row">
        <div className="col text-center">
          <h1 className="h1 text-uppercase text-white  mt-4">
            We are creavites
          </h1>
          <img src={Arrow} />
        </div>
      </div>
    </div>
  );
};

export default AboveTheFold;
