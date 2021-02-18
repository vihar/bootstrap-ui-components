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
<div className="pt-5 pb-5">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-7 align-self-center">
        <h1 className="fw-bolder text-center ">Contact our team</h1>
        <p className="lead text-dark text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="row mt-5 mb-3">
          <div className="col-md-6">
            <label>First Name</label>
            <input className="form-control" name="first-name" type="text" />
          </div>
          <div className="col-md-6">
            <label>Last Name</label>
            <input className="form-control" name="last-name" type="text" />
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
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label mb-3">
            Agree to terms and conditions
          </label>
        </div>
        <button className="btn btn-primary w-100" type="submit">
          Let's talk
        </button>
      </div>
    </div>
  </div>
</div>
~~~
`;

function SimpleContact() {
  return (
    <>
      <div className="pt-5 pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 align-self-center">
              <h1 className="fw-bolder text-center ">Contact our team</h1>
              <p className="lead text-dark text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="row mt-5 mb-3">
                <div className="col-md-6">
                  <label>First Name</label>
                  <input
                    className="form-control"
                    name="first-name"
                    type="text"
                  />
                </div>
                <div className="col-md-6">
                  <label>Last Name</label>
                  <input
                    className="form-control"
                    name="last-name"
                    type="text"
                  />
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

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label mb-3">
                  Agree to terms and conditions
                </label>
              </div>

              <button className="btn btn-primary w-100" type="submit">
                Let's talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function SimpleContactView() {
  return (
    <div>
      <SimpleContact />
    </div>
  );
}

export function SimpleContactCode() {
  return <ReactMarkdown renderers={renderers} children={markdown} />;
}
