import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter
        style={materialOceanic}
        language={language}
        children={value}
      />
    );
  },
};

const markdown = `
~~~html
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm w-100 pt-3 pb-3">
<div className="container-fluid">
    <a className="navbar-brand pe-3" href="#">
    <img className="img-fluid" src="/logo.svg" width="28" />
    <span className="ms-3 fw-bold">Navbar</span>
    </a>
    <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
    >
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
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
</div>
~~~
`;

function CenteredNav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm w-100 pt-3 pb-3">
        <div className="container-fluid">
          <a className="navbar-brand pe-3" href="#">
            <img className="img-fluid" src="/logo.svg" width="28" />
            <span className="ms-3 fw-bold">Navbar</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
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
    </div>
  );
}

export function CenteredNavView() {
  return (
    <>
      <CenteredNav />
    </>
  );
}

export function CenteredNavCode() {
  return (
    <>
      <ReactMarkdown renderers={renderers} children={markdown} />
    </>
  );
}
