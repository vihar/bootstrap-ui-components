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
<div className="container">
  <div className="row justify-content-center">
    <div className="col-md-5 align-self-center bg-light py-5 px-5">
      <h1 className="fw-bolder text-dark">Get in touch</h1>
      <p className="lead text-muted mt-3">
        <small>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna
          lectus, mattis non accumsan in, tempor dictum neque.
        </small>
      </p>
      <p className="lead text-muted mt-4">
        <small>
          1600 Amphitheatre Parkway in Mountain View, California, United States.
        </small>
      </p>
      <p className="lead text-muted mt-4">
        <small>
          <img className="img-fluid me-3" src="/contact/call.svg" width="19" />
          +1 (333) 123-5432
        </small>
      </p>
      <p className="lead text-muted mt-4">
        <small>
          <img className="img-fluid me-3" src="/contact/mail.svg" width="19" />
          hello@example.com
        </small>
      </p>
    </div>
    <div className="col-md-7 align-self-center py-5 px-5">
      <div className="row mt-5 mb-3">
        <div className="col-md-6">
          <label>First Name</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col-md-6">
          <label>Last Name</label>
          <input className="form-control" type="text" />
        </div>
      </div>
      <label>Company</label>
      <input className="form-control mb-3" type="text" />
      <label>Email</label>
      <label>Message</label>
      <textarea className="form-control mb-3" />
      <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label">
          Agree to terms and conditions
        </label>
      </div>
      <button className="btn btn-primary w-100" type="submit">
        Let's talk
      </button>
    </div>
  </div>
</div>
~~~
`;

function ContactSplitDetailForm() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 align-self-center bg-light py-5 px-5">
            <h1 className="fw-bolder text-dark">Get in touch</h1>
            <p className="lead text-muted mt-3">
              <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna
                lectus, mattis non accumsan in, tempor dictum neque.
              </small>
            </p>

            <p className="lead text-muted mt-4">
              <small>
                1600 Amphitheatre Parkway in Mountain View, California, United
                States.
              </small>
            </p>

            <p className="lead text-muted mt-4">
              <small>
                <img
                  className="img-fluid me-3"
                  src="/contact/call.svg"
                  width="19"
                />
                +1 (333) 123-5432
              </small>
            </p>

            <p className="lead text-muted mt-4">
              <small>
                <img
                  className="img-fluid me-3"
                  src="/contact/mail.svg"
                  width="19"
                />
                hello@example.com
              </small>
            </p>
          </div>
          <div className="col-md-7 align-self-center py-5 px-5">
            <div className="row mt-5 mb-3">
              <div className="col-md-6">
                <label>First Name</label>
                <input className="form-control" type="text" />
              </div>
              <div className="col-md-6">
                <label>Last Name</label>
                <input className="form-control" type="text" />
              </div>
            </div>

            <label>Company</label>
            <input className="form-control mb-3" type="text" />

            <label>Email</label>

            <label>Message</label>
            <textarea className="form-control mb-3" />

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label">
                Agree to terms and conditions
              </label>
            </div>

            <button className="btn btn-primary w-100" type="submit">
              Let's talk
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export function ContactSplitDetailFormView() {
  return (
    <div>
      <ContactSplitDetailForm />
    </div>
  );
}

export function ContactSplitDetailFormCode() {
  return <ReactMarkdown renderers={renderers} children={markdown} />;
}
