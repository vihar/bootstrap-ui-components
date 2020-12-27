import Link from "next/link";

function Home() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <Link href="/navbar">
                  <a>Navbar Components</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
