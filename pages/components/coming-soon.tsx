// next
import Link from "next/link";
// layouts
import { DefaultLayout } from "layouts";

export default function ComingSoon() {
  return (
    <DefaultLayout>
      <div style={{ height: "80vh" }}>
        <div className="container h-100">
          <div className="row h-100 justify-content-center">
            <div className="col-md-4 align-self-center">
              <div className="card border-0 p-4 shadow">
                <img
                  className="img-fluid d-block mx-auto"
                  src="/padblo.png"
                  width="200"
                />

                <p className="text-dark fw-bolder mt-3 text-center fs-4">
                  Work in Progress! Components Coming Soon!
                </p>
                <p className="m-0 text-center">
                  <Link href="/components">
                    <a>Browse other components</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
