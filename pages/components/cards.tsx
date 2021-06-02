// layout
import { ComponentLayout, DefaultLayout } from "layouts";

import {
  BlogFeatureSectionCode,
  BlogFeatureSectionView,
  BorderLessCardsCode,
  BorderLessCardsView,
  SimpleCardsCode,
  SimpleCardsView,
} from "components/blog-sections";

function CardsComponents() {
  return (
    <DefaultLayout>
      <div className="container mt-5">
        <div className="mb-5">
          <div className="border">
            <ComponentLayout
              title="Simple Cards"
              view={<SimpleCardsView />}
              doc={<SimpleCardsCode />}
              code="simple-cards-code"
              preview="simple-cards-preview"
            />
          </div>
        </div>
        <div className="mb-5">
          <div className="border">
            <ComponentLayout
              title="SimpleHeroDark"
              view={<BlogFeatureSectionView />}
              doc={<BlogFeatureSectionCode />}
              code="blog-feature-code"
              preview="blog-feature-preview"
            />
          </div>
        </div>

        <div className="mb-5">
          <div className="border">
            <ComponentLayout
              title="Border Less Cards"
              view={<BorderLessCardsView />}
              doc={<BorderLessCardsCode />}
              code="border-less-cards-code"
              preview="border-less-cards-preview"
            />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default CardsComponents;
