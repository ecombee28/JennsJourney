import React, { useState, useEffect } from "react";
import style from "../styles/Newsletter.module.css";

const NewsletterForm = ({ status, message, onValidated, position }) => {
  const [email, setEmail] = useState(null);
  const [feedBackMsg, setFeedBackMsg] = useState(null);

  const addEmail = (e) => {
    setEmail(e.target.value);
  };

  const sendForm = async () => {
    if (!email) {
      setFeedBackMsg("You must enter in an email address");
    } else {
      const isFormValidated = await onValidated({ EMAIL: email });
      isFormValidated && setEmail("");
    }
  };

  const clearMessage = () => {
    if (feedBackMsg) {
      setInterval(() => {
        setFeedBackMsg("");
      }, 10000);
    }
  };

  useEffect(() => {
    if (status === "error") {
      clearMessage();
      if (message.substr(0, 3) === "0 -") {
        setFeedBackMsg(message.substr(3));
      } else if (message.length > 200) {
        setFeedBackMsg(message.substr(0, message.length - 22));
      } else {
        setFeedBackMsg(message);
      }
    } else {
      setFeedBackMsg(message);
    }
  }, [message]);

  return (
    <div>
      <div className={style.main_container}>
        <div className={style.input_wrapper}>
          <input
            type="text"
            onChange={addEmail}
            value={email}
            className={`${style.email_input} ${
              position === "footer" && style.footer_input
            }`}
            placeholder="Email "
          />
          <button
            onClick={sendForm}
            className={`${style.submit_btn}  ${
              position === "footer" && style.footer_btn
            }`}
          >
            Subscribe
          </button>
        </div>

        <p className={`${style.message} ${feedBackMsg && style.show} `}>
          {feedBackMsg}
        </p>
      </div>
    </div>
  );
};

export default NewsletterForm;
