import { ComponentLayout } from "layouts";

import {
  SimpleHero,
  SimpleHeroDark,
  CenteredHero,
} from "components/herosections";

function HeroComponents() {
  return (
    <ComponentLayout>
      <div className="container mt-5">
        <p className="display-6 mb-5">Hero Components</p>
        <div className="mb-5">
          <div className="border">
            <SimpleHero />
          </div>
        </div>

        <div className="mb-5">
          <div className="border">
            <SimpleHeroDark />
          </div>
        </div>

        <div className="mb-5">
          <div className="border">
            <CenteredHero />
          </div>
        </div>

        <div className="mb-5"></div>
      </div>
    </ComponentLayout>
  );
}

export default HeroComponents;
