import React, { useState, useEffect } from "react";
import style from "../styles/Newsletter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const NewsletterForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [feedBackMsg, setFeedBackMsg] = useState(message);

  const addEmail = (e) => {
    setEmail(e.target.value);
  };

  const sendForm = async () => {
    if (email.length == 0) {
      setFeedBackMsg("You must enter in an email address");
    } else {
      const isFormValidated = await onValidated({ EMAIL: email });
    }
  };

  const clearMessage = () => {
    setEmail("");
    setTimeout(() => {
      setFeedBackMsg("");
    }, 7000);
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
      clearMessage();
      setFeedBackMsg(message);
    }
  }, [message]);

  return (
    <div>
      <div className={style.main_container}>
        <h2 className={style.header_title}>Subscribe Newsletter</h2>
        <p className={style.newsletter_title}>
          Stay up to date with the latest post and more.
        </p>
        <div className={style.input_wrapper}>
          <input
            type="text"
            onChange={addEmail}
            value={email}
            className={`${style.email_input} `}
            placeholder="Email... "
          />
          <button onClick={sendForm} className={`${style.submit_btn}`}>
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
