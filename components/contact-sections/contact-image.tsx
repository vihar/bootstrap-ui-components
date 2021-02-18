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
    <div className="col-md-5 align-self-center">
      <h1 className="fw-bolder">Contact our team</h1>
      <p className="lead text-dark">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
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
      <input className="form-control mb-3" type="email" />
      <label>Contact Number</label>
      <input className="form-control mb-3" type="number" />
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
    <div className="col-md-7 align-self-center text-center p-0 m-0">
      <img className="img-fluid" src="/contact.jpg" width="570" />
    </div>
  </div>
</div>

~~~
`;

function ContactWithImage() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 align-self-center">
            <h1 className="fw-bolder">Contact our team</h1>
            <p className="lead text-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

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
            <input className="form-control mb-3" type="email" />

            <label>Contact Number</label>
            <input className="form-control mb-3" type="number" />

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
          <div className="col-md-7 align-self-center text-center p-0 m-0">
            <img className="img-fluid" src="/contact.jpg" width="570" />
          </div>
        </div>
      </div>
    </>
  );
}

export function ContactWithImageView() {
  return (
    <div>
      <ContactWithImage />
    </div>
  );
}

export function ContactWithImageCode() {
  return <ReactMarkdown renderers={renderers} children={markdown} />;
}
