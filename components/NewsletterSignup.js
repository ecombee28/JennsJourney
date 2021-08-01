import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsletterForm from "./NewsletterForm";

const NewsletterSignup = () => {
  const url =
    "https://gmail.us6.list-manage.com/subscribe/post?u=ec25c33408e7bd415d49f1473&amp;id=4ad28bd733";

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
            />
          );
        }}
      />
    </div>
  );
};

export default NewsletterSignup;
