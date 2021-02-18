import React, { FC } from "react";

interface IComponentLayout {
  title: string;
  view: JSX.Element;
  doc: JSX.Element;
  code: string;
  preview: string;
}

const ComponentLayout: FC<IComponentLayout> = (props) => {
  const { title, view, doc, code, preview } = props;
  return (
    <div className="border rounded">
      <div className="d-flex align-items-center border border-top-0 border-start-0 border-end-0 w-100 px-3 py-1">
        <div>
          <p className="fw-bolder mb-0 badge bg-secondary">{title}</p>
        </div>
        <div className="ms-auto">
          <ul
            className="nav nav-pills custom-nav-tabs"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item me-2" role="presentation">
              <a
                className="nav-link active"
                id="code-tab"
                data-bs-toggle="tab"
                href={"#" + code}
                role="tab"
                aria-controls="code"
                aria-selected="true"
              >
                View
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="preview-tab"
                data-bs-toggle="tab"
                href={"#" + preview}
                role="tab"
                aria-controls="preview"
                aria-selected="false"
              >
                Code
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id={code}
          role="tabpanel"
          aria-labelledby="code-tab"
        >
          {view}
        </div>
        <div
          className="tab-pane fade"
          id={preview}
          role="tabpanel"
          aria-labelledby="preview-tab"
        >
          {doc}
        </div>
      </div>
    </div>
  );
};

export default ComponentLayout;
