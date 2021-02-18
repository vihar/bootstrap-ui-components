// layouts
import { DefaultLayout, ComponentLayout } from "layouts";
// components
import {
  SimpleHeroView,
  SimpleHeroCode,
  CenteredHeroView,
  CenteredHeroCode,
  SimpleHeroDarkCode,
  SimpleHeroDarkView,
  HeroSignUpCode,
  HeroSignUpView,
} from "components/hero-sections";

function HeroComponents() {
  return (
    <DefaultLayout>
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
            <ComponentLayout
              title="SimpleHeroDark"
              view={<SimpleHeroDarkView />}
              doc={<SimpleHeroDarkCode />}
              code="hero-dark-code"
              preview="hero-dark-preview"
            />
          </div>
        </div>

        <div className="mb-5">
          <div className="border">
            <ComponentLayout
              title="Simple Sign Up"
              view={<HeroSignUpView />}
              doc={<HeroSignUpCode />}
              code="hero-sign-up-code"
              preview="hero-sign-up-preview"
            />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default HeroComponents;
