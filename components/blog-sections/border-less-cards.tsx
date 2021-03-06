import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter
        style={materialOceanic}
        language={language}
        children={value}
      />
    );
  },
};

const markdown = `
~~~html
<div className="container my-5 py-5">
  <div className="row justify-content-center mb-4">
    <div className="col-md-7 align-self-center">
      <h1 className="fw-bold text-center">Our Blog</h1>
      <p className="lead text-dark text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </div>
  <div className="row justify-content-center">
    <div className="col-md-4 align-self-center">
      <div className="card border-0">
        <img className="card-img-top rounded" src="/blog/blog-image-one.jpg" />
        <div className="card-body ps-0">
          <span className="badge rounded-pill bg-primary mb-2">Tech</span>
          <span className="badge rounded-pill bg-success mb-2 ms-3">Tech</span>
          <h4 className="card-title mb-2 fw-bold text-dark">Card Title</h4>
          <p className="card-text mb-2 text-muted">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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
              <p className="text-dark fw-bold m-0">Ayn Rand</p>
              <span className="text-muted">October 13th, 2019</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 align-self-center">
      <div className="card border-0">
        <img className="card-img-top rounded" src="/blog/blog-image-one.jpg" />
        <div className="card-body ps-0">
          <span className="badge rounded-pill bg-primary mb-2">Tech</span>
          <span className="badge rounded-pill bg-success mb-2 ms-3">Tech</span>
          <h4 className="card-title mb-2 fw-bold text-dark">Card Title</h4>
          <p className="card-text mb-2 text-muted">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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
              <p className="text-dark fw-bold m-0">Ayn Rand</p>
              <span className="text-muted">October 13th, 2019</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 align-self-center">
      <div className="card border-0">
        <img className="card-img-top rounded" src="/blog/blog-image-one.jpg" />
        <div className="card-body ps-0">
          <span className="badge rounded-pill bg-primary mb-2">Tech</span>
          <span className="badge rounded-pill bg-success mb-2 ms-3">Tech</span>
          <h4 className="card-title mb-2 fw-bold text-dark">Card Title</h4>
          <p className="card-text mb-2 text-muted">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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
              <p className="text-dark fw-bold m-0">Ayn Rand</p>
              <span className="text-muted">October 13th, 2019</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

~~~
`;

function BorderLessCards() {
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row justify-content-center mb-4">
          <div className="col-md-7 align-self-center">
            <h1 className="fw-bold text-center">Our Blog</h1>
            <p className="lead text-dark text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-4 align-self-center">
            <div className="card border-0">
              <img
                className="card-img-top rounded"
                src="/blog/blog-image-one.jpg"
              />
              <div className="card-body ps-0">
                <span className="badge rounded-pill bg-primary mb-2">Tech</span>
                <span className="badge rounded-pill bg-success mb-2 ms-3">
                  Tech
                </span>

                <h4 className="card-title mb-2 fw-bold text-dark">
                  Card Title
                </h4>

                <p className="card-text mb-2 text-muted">
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
                    <p className="text-dark fw-bold m-0">Ayn Rand</p>
                    <span className="text-muted">October 13th, 2019</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 align-self-center">
            <div className="card border-0">
              <img
                className="card-img-top rounded"
                src="/blog/blog-image-one.jpg"
              />
              <div className="card-body ps-0">
                <span className="badge rounded-pill bg-primary mb-2">Tech</span>
                <span className="badge rounded-pill bg-success mb-2 ms-3">
                  Tech
                </span>

                <h4 className="card-title mb-2 fw-bold text-dark">
                  Card Title
                </h4>

                <p className="card-text mb-2 text-muted">
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
                    <p className="text-dark fw-bold m-0">Ayn Rand</p>
                    <span className="text-muted">October 13th, 2019</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 align-self-center">
            <div className="card border-0">
              <img
                className="card-img-top rounded"
                src="/blog/blog-image-one.jpg"
              />
              <div className="card-body ps-0">
                <span className="badge rounded-pill bg-primary mb-2">Tech</span>
                <span className="badge rounded-pill bg-success mb-2 ms-3">
                  Tech
                </span>

                <h4 className="card-title mb-2 fw-bold text-dark">
                  Card Title
                </h4>

                <p className="card-text mb-2 text-muted">
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
                    <p className="text-dark fw-bold m-0">Ayn Rand</p>
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

export default BorderLessCards;

export function BorderLessCardsView() {
  return (
    <div>
      <BorderLessCards />
    </div>
  );
}

export function BorderLessCardsCode() {
  return <ReactMarkdown renderers={renderers} children={markdown} />;
}
