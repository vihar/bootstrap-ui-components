// layouts
import { ComponentLayout, DefaultLayout } from "layouts";

// components
import {
  SimpleContactCode,
  SimpleContactView,
  ContactWithImageCode,
  ContactWithImageView,
  ContactSplitDetailFormCode,
  ContactSplitDetailFormView,
  ReachOutFormCode,
  ReachOutFormView,
} from "components/contact-sections";

function ContactFormComponents() {
  return (
    <DefaultLayout>
      <div className="container mt-5">
        <p className="display-6 mb-5">Contact Components</p>

        <div className="mb-5">
          <div className="border">
            <ComponentLayout
              title="Simple Contact Form"
              view={<SimpleContactView />}
              doc={<SimpleContactCode />}
              code="simple-contact-code"
              preview="simple-contact-preview"
            />
          </div>
        </div>

        <div className="mb-5">
          <div className="border">
            <ComponentLayout
              title="Contact Form with Image"
              view={<ContactWithImageView />}
              doc={<ContactWithImageCode />}
              code="contact-image-code"
              preview="contact-image-preview"
            />
          </div>
        </div>

        <div className="mb-5">
          <div className="border">
            <ComponentLayout
              title="Contact Split Form"
              view={<ContactSplitDetailFormView />}
              doc={<ContactSplitDetailFormCode />}
              code="contact-split-code"
              preview="contact-split-preview"
            />
          </div>
        </div>

        <div className="mb-5">
          <div className="border">
            <ComponentLayout
              title="Reach Out Form"
              view={<ReachOutFormView />}
              doc={<ReachOutFormCode />}
              code="react-contact-code"
              preview="reach-contact-preview"
            />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default ContactFormComponents;
