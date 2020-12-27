import {
  SimpleNav,
  CenteredNav,
  OverallCenterNav,
} from "components/navsections";

function NavbarComponents() {
  return (
    <div>
      <div className="container mt-5">
        <div className="mb-5">
          <SimpleNav />
        </div>

        <div className="mb-5">
          <CenteredNav />
        </div>

        <div className="mb-5">
          <OverallCenterNav />
        </div>
      </div>
    </div>
  );
}

export default NavbarComponents;
