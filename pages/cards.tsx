// layout
import { SiteLayout } from "layouts";

// components
import SimpleCards from "components/blog-sections/simple-cards";
import BorderLessCards from "components/blog-sections/border-less-cards";
import BlogFeatureSection from "components/blog-sections/blog-feature";

function CardsComponents() {
  return (
    <SiteLayout>
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
    </SiteLayout>
  );
}

export default CardsComponents;
