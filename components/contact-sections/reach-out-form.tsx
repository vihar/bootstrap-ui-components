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
<div className="container text-center py-5 my-5">
  <div className="row justify-content-center">
    <div className="col-md-8">
      <p className="text-primary text-uppercase">Contact Us</p>
      <h1 className="fw-bolder text-dark">How can we help you?</h1>
      <p className="lead text-dark">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna lectus,
        mattis non accumsan in, tempor dictum neque.
      </p>
    </div>
  </div>
  <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="row justify-content-center mt-4">
        <div className="col-md-4 align-self-center">
          <img className="img-fluid mb-4" src="/contact/call.svg" width="30" />
          <h4>Live Chat</h4>
          <p className="text-muted">Wait time of ~10 minutes</p>
        </div>
        <div className="col-md-4 align-self-center">
          <img className="img-fluid mb-4" src="/contact/mail.svg" width="30" />
          <h4>Email Us</h4>
          <p className="text-muted">We reply in ~24 hours</p>
        </div>
        <div className="col-md-4 align-self-center">
          <img className="img-fluid mb-4" src="/contact/chat.svg" width="30" />
          <h4>Call Us</h4>
          <p className="text-muted">7am - 9pm PST</p>
        </div>
      </div>
      <div className="row g-2 mt-3 mb-3">
        <div className="col-md">
          <input type="name" className="form-control" placeholder="Your Name" />
        </div>
        <div className="col-md">
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
          />
        </div>
      </div>
      <textarea className="form-control mb-3" placeholder="Your message here" />
      <button className="btn btn-primary w-100">Send a Message</button>
    </div>
  </div>
</div>
~~~
`;

function ReachOutForm() {
  return (
    <>
      <div className="container text-center py-5 my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <p className="text-primary text-uppercase">Contact Us</p>
            <h1 className="fw-bolder text-dark">How can we help you?</h1>
            <p className="lead text-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna
              lectus, mattis non accumsan in, tempor dictum neque.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="row justify-content-center mt-4">
              <div className="col-md-4 align-self-center">
                <img
                  className="img-fluid mb-4"
                  src="/contact/call.svg"
                  width="30"
                />
                <h4>Live Chat</h4>
                <p className="text-muted">Wait time of ~10 minutes</p>
              </div>
              <div className="col-md-4 align-self-center">
                <img
                  className="img-fluid mb-4"
                  src="/contact/mail.svg"
                  width="30"
                />
                <h4>Email Us</h4>
                <p className="text-muted">We reply in ~24 hours</p>
              </div>
              <div className="col-md-4 align-self-center">
                <img
                  className="img-fluid mb-4"
                  src="/contact/chat.svg"
                  width="30"
                />
                <h4>Call Us</h4>
                <p className="text-muted">7am - 9pm PST</p>
              </div>
            </div>

            <div className="row g-2 mt-3 mb-3">
              <div className="col-md">
                <input
                  type="name"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="col-md">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>
            </div>

            <textarea
              className="form-control mb-3"
              placeholder="Your message here"
            />

            <button className="btn btn-primary w-100">Send a Message</button>
          </div>
        </div>
      </div>
    </>
  );
}

export function ReachOutFormView() {
  return (
    <div>
      <ReachOutForm />
    </div>
  );
}

export function ReachOutFormCode() {
  return <ReactMarkdown renderers={renderers} children={markdown} />;
}
