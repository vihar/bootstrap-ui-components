import Link from "next/link";

function Home() {
  return (
    <>
      <div className="container">
        <div className="card">
          <Link href="/navbar">
            <a>Navbar Components</a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
