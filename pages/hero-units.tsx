import { SiteLayout, ComponentLayout } from "layouts";
// components
import {
  SimpleHeroView,
  SimpleHeroCode,
  CenteredHeroView,
  CenteredHeroCode,
} from "components/hero-sections";
import HeroSignUp from "components/hero-sections/hero-with-signup";

function HeroComponents() {
  return (
    <SiteLayout>
      <div className="container mt-5">
        <p className="display-6 mb-5">Hero Components</p>
        <div className="mb-5">
          <ComponentLayout
            title="Simple Hero"
            view={<SimpleHeroView />}
            doc={<SimpleHeroCode />}
            code="simple-hero-code"
            preview="simple-hero-preview"
          />
        </div>

        <div className="mb-5">
          <div className="border">
            <ComponentLayout
              title="Simple Hero"
              view={<CenteredHeroView />}
              doc={<CenteredHeroCode />}
              code="centered-hero-code"
              preview="centered-hero-preview"
            />
          </div>
        </div>

        <div className="mb-5">
          <div className="border">
            <HeroSignUp />
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}

export default HeroComponents;
