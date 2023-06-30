import "./style.css";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg p-4">
      <div className="container-xl">
        <a
          className="navbar-brand text-navbar-brand"
          href="http://localhost:5173/"
        >
          sunnyside
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="justify-content-end collapse navbar-collapse"
          id="navbarTogglerDemo01"
        >
          <div className="navbar-nav nav-pills gap-3">
            <a className="nav-link" href="#">
              Services
            </a>
            <a className="nav-link" href="#">
              Projects
            </a>
            <a className="nav-link active" aria-current="page" href="#">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
