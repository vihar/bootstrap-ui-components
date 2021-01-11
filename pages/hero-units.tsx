import { SiteLayout, ComponentLayout } from "layouts";
// components
import { SimpleHeroView, SimpleHeroCode } from "components/hero-sections";
import SimpleHeroDark from "components/hero-sections/simple-hero-dark";
import CenteredHero from "components/hero-sections/centered-hero";
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
          />

          {/* <div className="border">
            <SimpleHero />
          </div> */}
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
