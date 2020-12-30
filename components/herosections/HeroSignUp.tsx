function HeroSignUp() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
        <div className="container-fluid">
          <a className="navbar-brand pe-3" href="#">
            <img className="img-fluid" src="/logo.svg" width="28" />
            <span className="ms-3 fw-bold">Navbar</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#simpleNav"
            aria-controls="simpleNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="simpleNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link fw-bold" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">
                  Docs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">
                  Pricing
                </a>
              </li>
            </ul>
            <ul className="navbar-nav justify-content-end">
              <li className="nav-item ">
                <a className="nav-link fw-bold" href="#">
                  About
                </a>
              </li>
              <li className="nav-item pe-3">
                <a className="nav-link fw-bold" href="#">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="mt-n5" style={{ height: "700px" }}>
        <div className="container h-100">
          <div className="row h-100 justify-content-center">
            <div className="col-md-6 align-self-center">
              <h1 className="display-4 fw-bold  mb-3">
                Data to enrich your
                <span className="text-primary"> online business</span>
              </h1>
              <p className="mb-4 text-muted lead">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="btn btn-primary rounded-0">Get Started</div>
              <div className="btn btn-outline-primary ms-3 rounded-0">
                Live Demo
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5 align-self-center">
              <div className="card">
                <div className="card-body">
                  <h5 className="text-center mb-3">Create Your Free Account</h5>
                  <div className="row text-center">
                    <div className="col">
                      <div className="btn btn-light w-100 border pr-5 pl-5">
                        <img
                          className="img-fluid "
                          src="google.svg"
                          width="25"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <button className="btn btn-light w-100 border pr-5 pl-5">
                        <img
                          className="img-fluid"
                          src="facebook.svg"
                          width="25"
                        />
                      </button>
                    </div>
                    <div className="col">
                      <button className="btn btn-light w-100 border pr-5 pl-5">
                        <img
                          className="img-fluid "
                          src="linkedin.svg"
                          width="25"
                        />
                      </button>
                    </div>
                  </div>

                  <hr />
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  ></input>
                  <label className="form-label mt-3">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Password"
                  ></input>

                  <button
                    className="btn btn-primary text-center mt-3 w-100"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>

                <div className="card-footer text-muted mt-2">
                  <small>
                    We'll never share your email with anyone else. By continuing
                    you accept the Terms of Use and Privacy Policy.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSignUp;
