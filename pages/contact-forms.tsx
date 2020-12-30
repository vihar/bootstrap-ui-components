// layouts
import { ComponentLayout } from "layouts";

// components
import { SimpleContact } from "components/contactsections";

function ContactFormComponents() {
  return (
    <ComponentLayout>
      <div className="container mt-5">
        <p className="display-6 mb-5">Contact Components</p>

        <div className="mb-5">
          <div className="border">
            <SimpleContact />
          </div>
        </div>
      </div>
    </ComponentLayout>
  );
}

export default ContactFormComponents;
