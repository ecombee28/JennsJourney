import React from "react";
import style from "../styles/About.module.css";

const about = () => {
  return (
    <div>
      <div className={style.main_container}>
        <img src="/about_img2.jpg" className={style.img} />
        <h1 className={style.title}>What is Jenn's Journey?</h1>
        <p className={style.text}>
          Hi friend! Thank you for being here. This is an
          informational/inspirational blog where I will share insight about my
          favorite topics such as my experience raising children with autism,
          managing stress, saving money, career joy and more! As a learning
          professional, I can testify to the statement- "you never stop
          learning." This simple truth gave me the confidence to start the blog.
          I did not feel qualified as I am not the expert in any of these
          topics. However, I hope my learning will inspire, encourage and
          challenge you. If not, at least give you a good chuckle because I've
          got some embarrassing stories to share. So, enjoy my friend and if you
          want to chat about any of these topics, please message me anytime.
        </p>
      </div>
    </div>
  );
};

export default about;
