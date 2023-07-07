import "./style.css";

const Hamburger = () => {
  return (
    <div
      className="w-full h-[20px]  justify-around z-10 flex"
      style={{ flexFlow: "column nowrap" }}
    >
      <div className="burger"></div>
      <div className="burger"></div>
      <div className="burger"></div>
    </div>
  );
};

export default Hamburger;
