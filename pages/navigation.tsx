// layouts
import { SiteLayout } from "layouts";

// components
import SimpleNav from "components/nav-sections/simple-nav";
import CenteredNav from "components/nav-sections/centered-nav";
import OverallCenterNav from "components/nav-sections/overall-centered-nav";
import SimpleNavDropdown from "components/nav-sections/nav-simple-dropdown";

function NavbarComponents() {
  return (
    <SiteLayout>
      <div className="container mt-5">
        <p className="display-6 mb-5">Navigation Components</p>
        <div className="mb-5">
          <SimpleNav />
        </div>

        <div className="mb-5">
          <CenteredNav />
        </div>

        <div className="mb-5">
          <OverallCenterNav />
        </div>

        <div className="mb-5">
          <SimpleNavDropdown />
        </div>
      </div>
    </SiteLayout>
  );
}

export default NavbarComponents;
