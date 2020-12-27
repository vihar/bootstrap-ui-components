import { ComponentLayout } from "layouts";
import Link from "next/link";

function ComingSoonPage() {
  return (
    <ComponentLayout>
      <div style={{ height: "80vh" }}>
        <div className="container h-100 text-center mt-5">
          <div className="row h-100">
            <div className="col align-self-center">
              <p className="display-6">Coming Soon, Stay Tuned.</p>

              <p className="lead mt-5">
                <Link href="https://github.com/vihar/strapfive">
                  <a target="_blank">
                    <img
                      className="img-fluid me-4"
                      src="https://img.icons8.com/color/48/000000/github-2.png"
                      width="40"
                    />
                    <span className="">Star on Github</span>
                  </a>
                </Link>
              </p>

              <p className="lead">
                <Link href="https://twitter.com/vihar13k">
                  <a target="_blank">
                    <img
                      className="img-fluid me-4"
                      src="https://img.icons8.com/cute-clipart/128/000000/twitter.png"
                      width="40"
                    />
                    <span className="">Follow me on Twitter</span>
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </ComponentLayout>
  );
}

export default ComingSoonPage;
