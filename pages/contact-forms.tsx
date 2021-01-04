// layouts
import { ComponentLayout } from "layouts";

// components
import ContactWithImage from "components/contact-sections/contact-image";
import ReachOutForm from "components/contact-sections/reach-out-form";
import SimpleContact from "components/contact-sections/simple-contact";
import ContactSplitDetailForm from "components/contact-sections/contact-split";

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

        <div className="mb-5">
          <div className="border">
            <ReachOutForm />
          </div>
        </div>

        <div className="mb-5">
          <div className="border">
            <ContactWithImage />
          </div>
        </div>

        <div className="mb-5">
          <div className="border">
            <ContactSplitDetailForm />
          </div>
        </div>
      </div>
    </ComponentLayout>
  );
}

export default ContactFormComponents;
