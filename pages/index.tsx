// next
import Link from "next/link";
// next-seo
import { NextSeo } from "next-seo";
// layouts
import { DefaultLayout } from "layouts";

function Home() {
  return (
    <>
      <NextSeo title="Bootstrap 5 UI Components | Home " />
      <DefaultLayout>
        <div style={{ height: "80vh" }}>
          <div className="container h-100 text-center">
            <div className="row justify-content-center h-100">
              <div className="col-md-8 align-self-center">
                <h1 className="fw-bolder text-dark">
                  Beautifully crafted bootstrap 5 components for faster, better
                  and easier UI development 🚀!
                </h1>{" "}
                <h5 className="fw-light text-muted mt-3">
                  No packages required, <strong>Zero CSS and JavaScript</strong>{" "}
                  bootstrap 5 components for you and your organizations.
                  Completely free and open to use, contributions are welcome.
                </h5>
                <div className="mt-3">
                  <Link href="/components">
                    <a>
                      <button className="btn btn-primary me-3">
                        View Components
                      </button>
                    </a>
                  </Link>
                  <Link href="https://github.com/vihar/bootstrap-ui-components">
                    <a target="_blank">
                      <button className="btn btn-outline-secondary">
                        Star on Github
                      </button>
                    </a>
                  </Link>
                </div>
                <p className="lead text-muted mt-4">
                  Created and maintained by{" "}
                  <Link href="https://twitter.com/vihar13k">
                    <a target="_blank">@vihar13k</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}

export default Home;
