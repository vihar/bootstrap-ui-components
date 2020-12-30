function SimpleCards() {
  return (
    <>
      <div className="container my-5 py-3">
        <div className="row justify-content-center mb-4">
          <div className="col-md-7 align-self-center">
            <h1 className="font-weight-bold text-center">Our Blog</h1>
            <p className="lead text-dark text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-4 align-self-center">
            <div className="card border-0 shadow">
              <img
                className="card-img-top img-fluid"
                src="/blog/blog-image-one.jpg"
              />
              <div className="card-body">
                <h4 className="card-title font-weight-bold text-dark mb-2">
                  Card Title
                </h4>

                <p className="card-text mb-2text-muted">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>

                <div className="d-flex flex-row">
                  <div className="p-2">
                    <img
                      className="img-fluid rounded-circle"
                      src="/profile/profile-one.jpg"
                      width="50"
                    />
                  </div>
                  <div className="p-2">
                    <p className="text-dark font-weight-bold m-0">Ayn Rand</p>
                    <span className="text-muted">October 13th, 2019</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 align-self-center">
            <div className="card border-0 shadow">
              <img
                className="card-img-top img-fluid"
                src="/blog/blog-image-one.jpg"
              />
              <div className="card-body">
                <h4 className="card-title font-weight-bold text-dark mb-2">
                  Card Title
                </h4>

                <p className="card-text mb-2text-muted">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>

                <div className="d-flex flex-row">
                  <div className="p-2">
                    <img
                      className="img-fluid rounded-circle"
                      src="/profile/profile-one.jpg"
                      width="50"
                    />
                  </div>
                  <div className="p-2">
                    <p className="text-dark font-weight-bold m-0">Ayn Rand</p>
                    <span className="text-muted">October 13th, 2019</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 align-self-center">
            <div className="card border-0 shadow">
              <img
                className="card-img-top img-fluid"
                src="/blog/blog-image-one.jpg"
              />
              <div className="card-body">
                <h4 className="card-title font-weight-bold text-dark mb-2">
                  Card Title
                </h4>

                <p className="card-text mb-2text-muted">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>

                <div className="d-flex flex-row">
                  <div className="p-2">
                    <img
                      className="img-fluid rounded-circle"
                      src="/profile/profile-one.jpg"
                      width="50"
                    />
                  </div>
                  <div className="p-2">
                    <p className="text-dark font-weight-bold m-0">Ayn Rand</p>
                    <span className="text-muted">October 13th, 2019</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SimpleCards;
