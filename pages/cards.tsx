// layout
import { ComponentLayout } from "layouts";
// components
import {
  SimpleCards,
  BorderLessCards,
  BlogFeatureSection,
} from "components/blogsections";

function CardsComponents() {
  return (
    <ComponentLayout>
      <div className="container mt-5">
        <div className="mb-5">
          <div className="border">
            <SimpleCards />
          </div>
        </div>

        <div className="mb-5">
          <div className="border">
            <BorderLessCards />
          </div>
        </div>

        <div className="mb-5">
          <div className="border">
            <BlogFeatureSection />
          </div>
        </div>
      </div>
    </ComponentLayout>
  );
}

export default CardsComponents;
