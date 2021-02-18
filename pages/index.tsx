import Link from "next/link";

function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <a className="navbar-brand pe-3" href="#">
            <span className="ms-3 fw-bold">bootstrap5</span>
            <span className="p-1 border rounded mx-2">UI</span>
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
              <li className="nav-item px-3">Components</li>
              <li className="nav-item px-3">About</li>
              <li className="nav-item px-3">Github</li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ height: "80vh" }}>
        <div className="container h-100 text-center">
          <div className="row justify-content-center h-100">
            <div className="col-md-8 align-self-center">
              <h1 className="fw-bolder text-dark">
                Beautifully crafted bootstrap 5 components for faster, better
                and easier UI development 🚀!
              </h1>{" "}
              <h4 className="fw-lighter text-muted mt-3">
                Fully responsive bootstrap 5 components for you and your
                organizations. Completely free and open to use, contributions
                are welcome.
              </h4>
              <div className="mt-3">
                <button className="btn btn-primary me-3">
                  View Components
                </button>
                <Link href="https://github.com/vihar/bootstrap-ui-components">
                  <a target="_blank">
                    <button className="btn btn-outline-secondary">
                      Star on Github
                    </button>
                  </a>
                </Link>
              </div>
              <p className="lead text-muted mt-4">
                Created and Maintained by{" "}
                <Link href="https://twitter.com/vihar13k">
                  <a target="_blank">@vihark13</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
