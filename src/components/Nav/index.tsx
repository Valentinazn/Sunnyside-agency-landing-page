interface INav {
  img: string;
  linkAbout: string;
  linkServices: string;
  linkProject: string;
  linkContact: string;
}

const Nav = (props: INav) => {
  return (
    <nav className="">
      <div className="">
        <a href="http://localhost:5173/">
          <img src={props.img} alt="logo" />
        </a>
        <button className="" type="button">
          <span className=""></span>
        </button>
        <div className="" id="navbarTogglerDemo01">
          <div className="">
            <a className="" href="#">
              {props.linkAbout}
            </a>
            <a className="" href="#">
              {props.linkServices}
            </a>
            <a className="" href="#">
              {props.linkProject}
            </a>
            <button className="">
              <a className="" href="#">
                {props.linkContact}
              </a>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
