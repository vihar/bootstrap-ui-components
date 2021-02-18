// next

import Link from "next/link";

function DefaultLayout(props: any) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <a className="navbar-brand pe-3">
            <Link href="/">
              <a className="text-dark text-decoration-none">
                <span className="ms-3 fw-bold">bootstrap5</span>
                <span className="p-1 border rounded mx-2 fw-bolder shadow-sm">
                  UI
                </span>
              </a>
            </Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <ul className="navbar-nav justify-content-end">
              <li className="nav-item fw-bold px-3">
                <Link href="/components">
                  <a className="text-dark text-decoration-none">Components</a>
                </Link>
              </li>
              <li className="nav-item fw-bold px-3">About</li>

              <li className="nav-item fw-bold px-3">
                <Link href="https://github.com/vihar/bootstrap-ui-components">
                  <a target="_blank" className="text-dark text-decoration-none">
                    Github
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {props.children}
    </>
  );
}

export default DefaultLayout;
