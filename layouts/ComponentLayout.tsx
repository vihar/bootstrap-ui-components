import React, { FC } from "react";

interface IComponentLayout {
  title: string;
  view: JSX.Element;
  doc: JSX.Element;
}

const ComponentLayout: FC<IComponentLayout> = (props) => {
  const { title, view, doc } = props;
  return (
    <div>
      {title}
      <ul className="nav nav-pills" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            View
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            href="#profile"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Code
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          {view}
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          {doc}
        </div>
      </div>
    </div>
  );
};

export default ComponentLayout;
