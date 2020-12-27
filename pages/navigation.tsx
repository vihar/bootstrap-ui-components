import { ComponentLayout } from "layouts";

import {
  SimpleNav,
  CenteredNav,
  OverallCenterNav,
  SimpleNavDropdown,
  DropdownHeavyNav,
} from "components/navsections";

function NavbarComponents() {
  return (
    <ComponentLayout>
      <div className="container mt-5">
        <p className="display-6 mb-5">Navigation Componets</p>
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

        <div className="mb-5">
          <DropdownHeavyNav />
        </div>
      </div>
    </ComponentLayout>
  );
}

export default NavbarComponents;
