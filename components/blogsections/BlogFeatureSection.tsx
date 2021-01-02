function BlogFeatureSection() {
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row justify-content-center mb-4">
          <div className="col-md-7 align-self-center">
            <h1 className="fw-bolder text-center">Our Blog</h1>
            <p className="lead text-dark text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card border-0 shadow">
              <div className="row justify-content-center">
                <div className="col-md-5 p-0 m-0 align-self-center">
                  <img className="img-fluid" src="/blog/blog-image-one.jpg" />
                </div>
                <div className="col-md-6 align-self-center py-5 ps-5">
                  <h6 className="text-success mb-2">Featured Story</h6>
                  <h4 className="font-weight-bold text-dark">
                    Designed for a simple future
                  </h4>
                  <p className="lead text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="d-flex flex-row">
                    <div className="p-2">
                      <img
                        className="img-fluid rounded-circle"
                        src="/profile/profile-two.jpg"
                        width="55"
                      />
                    </div>
                    <div className="p-2">
                      <p className="text-dark font-weight-bold m-0">
                        John Smith
                      </p>
                      <span className="text-muted">October 13th, 2019</span>
                    </div>
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

export default BlogFeatureSection;
