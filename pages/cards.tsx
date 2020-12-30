// layout
import { ComponentLayout } from "layouts";
// components
import { SimpleCards } from "components/blogsections";

function CardsComponents() {
  return (
    <ComponentLayout>
      <div className="container mt-5">
        <div className="mb-5">
          <div className="border">
            <SimpleCards />
          </div>
        </div>
      </div>
    </ComponentLayout>
  );
}

export default CardsComponents;
