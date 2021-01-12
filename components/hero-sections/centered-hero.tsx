import React from "react";
import dynamic from "next/dynamic";
import SyntaxHighlighter from "react-syntax-highlighter";

const darcula = dynamic(
  () => import("react-syntax-highlighter/dist/esm/styles/prism/dark"),
  { ssr: false }
);

function CenteredHero() {
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
              <li className="nav-item pe-3">
                <button className="btn btn-outline-primary shadow-sm">
                  Login
                </button>
              </li>
              <li className="nav-item ">
                <button className="btn btn-primary shadow-sm">Sign Up</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ height: "80vh" }}>
        <div className="container h-100">
          <div className="row h-100 mt-n4 justify-content-center">
            <div className="col-md-12 text-center align-self-center">
              <h5 className="mb-3">
                <small className="text-muted text-uppercase">
                  Design Inspiration
                </small>
              </h5>
              <h1 className="display-4 fw-bold mb-3">
                Data to enrich your
                <span className="text-primary"> online business</span>
              </h1>
              <p className="mb-4 lead text-muted">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="btn btn-primary btn-lg">Get Started</div>
              <div className="btn btn-outline-primary btn-lg ms-3">
                Live Demo
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function CenteredHeroView() {
  return (
    <>
      <CenteredHero />
    </>
  );
}

export function CenteredHeroCode() {
  return (
    <>
      <SyntaxHighlighter language="html" style={darcula}>
        {`
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
              <li className="nav-item pe-3">
                <button className="btn btn-outline-primary shadow-sm">Login</button>
              </li>
              <li className="nav-item ">
                <button className="btn btn-primary shadow-sm">Sign Up</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style="height: 80vh">
        <div className="container h-100">
          <div className="row h-100 mt-n4 justify-content-center">
            <div className="col-md-12 text-center align-self-center">
              <h5 className="mb-3">
                <small className="text-muted text-uppercase">
                  Design Inspiration
                </small>
              </h5>
              <h1 className="display-4 fw-bold mb-3">
                Data to enrich your
                <span className="text-primary"> online business</span>
              </h1>
              <p className="mb-4 lead text-muted">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="btn btn-primary btn-lg">Get Started</div>
              <div className="btn btn-outline-primary btn-lg ms-3">Live Demo</div>
            </div>
          </div>
        </div>
      </div>`}
      </SyntaxHighlighter>
    </>
  );
}
