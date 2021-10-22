import React from "react";
import style from "../styles/About.module.css";
import Head from "next/head";

const about = () => {
  return (
    <div>
      <Head>
        <title>About | Jenns Journey</title>
        <meta name="keywords" content="web dev" />
        <link rel="shortcut icon" href="logo.ico" />
        <base target="_blank" />
      </Head>
      <div className={style.main_container}>
        <h1 className={style.title}>What is Jenn's Journey?</h1>
        <p className={style.text}>
          Hi friend! Thank you for being here. Jenn's Journey is a blog about my
          journey, the unfiltered version. You will get a glimpse of what it's
          like to raise children on the autism spectrum, pursue work-life
          balance, self care, and more. Enjoy the journey my friend and if you
          want to chat, message me anytime.
        </p>
        <img src="/main_about.jpg" className={style.img} />
      </div>
    </div>
  );
};

export default about;
