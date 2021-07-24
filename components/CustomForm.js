import React, { useState } from "react";
import "./mcFormStyles.scss";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import InputField from "../../ui/InputField/InputField";

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <form className="mc__form">
      <h3 className="mc__title">Join our email list for future updates.</h3>
      <div className="mc__field-container">
        <InputField
          label="First Name"
          onChangeHandler={setFirstName}
          type="text"
          value={firstName}
          placeholder="Jane"
          isRequired
        />

        <InputField
          label="Last Name"
          onChangeHandler={setLastName}
          type="text"
          value={lastName}
          placeholder="Doe"
          isRequired
        />

        <InputField
          label="Email"
          onChangeHandler={setEmail}
          type="email"
          value={email}
          placeholder="your@email.com"
          isRequired
        />
      </div>

      <InputField
        label="subscribe"
        type="submit"
        formValues={[email, firstName, lastName]}
      />
    </form>
  );
};

export default CustomForm;
