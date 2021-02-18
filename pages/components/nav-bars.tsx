// layouts
import { ComponentLayout, DefaultLayout } from "layouts";

// components
import {
  CenteredNavView,
  CenteredNavCode,
  OverallCenterNavView,
  OverallCenterNavCode,
  SimpleNavView,
  SimpleNavCode,
} from "components/nav-sections";

function NavbarComponents() {
  return (
    <DefaultLayout>
      <div className="container mt-5">
        <p className="display-6 mb-5">Navigation Components</p>

        <div className="mb-5">
          <ComponentLayout
            title="Simple Nav"
            view={<SimpleNavView />}
            doc={<SimpleNavCode />}
            code="simple-hero-code"
            preview="simple-hero-preview"
          />
        </div>

        <div className="mb-5">
          <ComponentLayout
            title="Centerd Nav"
            view={<CenteredNavView />}
            doc={<CenteredNavCode />}
            code="centered-nav-code"
            preview="centered-nav-preview"
          />
        </div>

        <div className="mb-5">
          <ComponentLayout
            title="Overall Centered Nav"
            view={<OverallCenterNavView />}
            doc={<OverallCenterNavCode />}
            code="overall-center-nav-code"
            preview="overall-center-nav-preview"
          />
        </div>

        <div className="mb-5">
          <ComponentLayout
            title="Simple Nav Dropdown"
            view={<OverallCenterNavView />}
            doc={<OverallCenterNavCode />}
            code="simple-nav-dd-code"
            preview="simple-nav-dd-nav-preview"
          />
        </div>
      </div>
    </DefaultLayout>
  );
}

export default NavbarComponents;
