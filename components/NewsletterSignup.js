import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsletterForm from "./NewsletterForm";

const NewsletterSignup = ({ position }) => {
  const url = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  return (
    <div>
      <MailchimpSubscribe
        url={url}
        render={(props) => {
          const { subscribe, status, message } = props || {};
          return (
            <NewsletterForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
              position={position}
            />
          );
        }}
      />
    </div>
  );
};

export default NewsletterSignup;
