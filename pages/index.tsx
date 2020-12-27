import Link from "next/link";

function Home() {
  return (
    <div style={{ height: "80vh" }}>
      <div className="container h-100 text-center">
        <div className="row justify-content-center h-100">
          <div className="col-md-12 align-self-center">
            <div className="mb-5">
              <img
                className="img-fluid mx-auto d-block"
                src="/logo.svg"
                width="70"
              />
              <h1 className="fw-light d-inline mb-0 fw-bold">Strapfive</h1>
            </div>

            <div className="h3 fw-light">Landing page coming soon❗</div>
            <div className="h3 fw-light">
              Meanwhile, explore components 👉 &nbsp;
              <Link href="/navigation">
                <a>here</a>
              </Link>
              , more coming soon!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
