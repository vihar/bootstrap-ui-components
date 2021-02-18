// next
import Link from "next/link";

// layouts
import { DefaultLayout } from "layouts";

function ComponentsPage() {
  return (
    <DefaultLayout>
      <div className="container mt-4">
        <div
          className="alert alert-primary alert-dismissible fade show"
          role="alert"
        >
          Work sill in progress, more coming soon.<strong> Stay Tuned!</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>

        <div className="row mt-5">
          <div className="col-md-4">
            <Link href="components/hero-units">
              <a className="text-decoration-none">
                <div className="card shadow p-3">
                  <img className="card-img-top" src="/skeletons/hero.svg" />
                  <div className="card-body bg-light bg-gradient">
                    <h6 className="text-center text-dark fw-bolder m-0">
                      Hero Units
                    </h6>
                  </div>
                </div>
              </a>
            </Link>
          </div>

          <div className="col-md-4">
            <Link href="components/nav-bars">
              <a className="text-decoration-none">
                <div className="card shadow p-3">
                  <img className="card-img-top" src="/skeletons/nav.svg" />
                  <div className="card-body bg-light bg-gradient">
                    <h6 className="text-center text-dark fw-bolder m-0">
                      Navigation Bars
                    </h6>
                  </div>
                </div>
              </a>
            </Link>
          </div>

          <div className="col-md-4">
            <Link href="components/coming-soon">
              <a className="text-decoration-none">
                <div className="card shadow p-3">
                  <img className="card-img-top" src="/skeletons/feature.svg" />
                  <div className="card-body bg-light bg-gradient">
                    <h6 className="text-center text-dark fw-bolder m-0">
                      Feature Sections
                    </h6>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4">
            <Link href="components/cards">
              <a className="text-decoration-none">
                <div className="card shadow p-3">
                  <img className="card-img-top" src="/skeletons/blog.svg" />
                  <div className="card-body bg-light bg-gradient">
                    <h6 className="text-center text-dark fw-bolder m-0">
                      Blog Sections
                    </h6>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default ComponentsPage;
