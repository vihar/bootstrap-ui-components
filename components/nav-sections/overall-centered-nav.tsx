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
<nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm w-100 pt-3 pb-3">
<div className="container-fluid">
    <a
    className="navbar-brand pe-3 fw-bold d-none d-sm-block d-lg-none"
    href="#"
    >
    Shooper.
    </a>
    <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarOverallCenter"
    aria-controls="navbarOverallCenter"
    aria-expanded="false"
    aria-label="Toggle navigation"
    >
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarOverallCenter">
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
        <a
        className="navbar-brand fw-bolder px-4 m-0 d-none d-sm-none d-lg-block"
        href="#"
        >
        Shooper.
        </a>
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
    </div>
</div>
</nav>
~~~
`;

function OverallCenterNav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm w-100 pt-3 pb-3">
        <div className="container-fluid">
          <a
            className="navbar-brand pe-3 fw-bold d-none d-sm-block d-lg-none"
            href="#"
          >
            Shooper.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarOverallCenter"
            aria-controls="navbarOverallCenter"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarOverallCenter">
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
              <a
                className="navbar-brand fw-bolder px-4 m-0 d-none d-sm-none d-lg-block"
                href="#"
              >
                Shooper.
              </a>
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
          </div>
        </div>
      </nav>
    </div>
  );
}

export function OverallCenterNavView() {
  return (
    <>
      <OverallCenterNav />
    </>
  );
}

export function OverallCenterNavCode() {
  return (
    <>
      <ReactMarkdown renderers={renderers} children={markdown} />
    </>
  );
}
