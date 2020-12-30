import Link from "next/link";

function ComponentLayout(props: any) {
  return (
    <div className="overflow-hidden" style={{ height: "100vh" }}>
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-md-2 bg-light h-100 mx-0">
            <div className="pt-4 ps-2">
              <div className="row justify-content-center">
                <div className="col-md-2 align-self-center">
                  <img className="img-fluid mx-auto d-block" src="/logo.svg" />
                </div>
                <div className="col-md-10 align-self-center">
                  <h5 className="fw-light d-inline mb-0 fw-bold">Strapfive</h5>
                </div>
              </div>
            </div>

            <ul className="list-group list-group-flush pt-4">
              <li className="list-group-item border-0 bg-light lead">
                <Link href="/navigation">
                  <a className="text-dark text-decoration-none">Navigation</a>
                </Link>
              </li>
              <li className="list-group-item border-0 bg-light lead">
                <Link href="/hero-units">
                  <a className="text-dark text-decoration-none">
                    Hero Sections
                  </a>
                </Link>
              </li>
              <li className="list-group-item border-0 bg-light lead">
                <Link href="/contact-forms">
                  <a className="text-dark text-decoration-none">
                    Contact Sections
                  </a>
                </Link>
              </li>
              <li className="list-group-item border-0 bg-light lead">
                <Link href="/cards">
                  <a className="text-dark text-decoration-none">
                    Blog Sections / Cards
                  </a>
                </Link>
              </li>
              <li className="list-group-item border-0 bg-light lead">
                <Link href="/coming-soon">
                  <a className="text-dark text-decoration-none">CTA Sections</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-10 h-100 overflow-scroll">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComponentLayout;
