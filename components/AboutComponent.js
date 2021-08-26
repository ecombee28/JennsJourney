import React from "react";
import style from "../styles/HomeComponent.module.css";
import Link from "next/link";

const AboutComponent = () => {
  return (
    <div className={style.main_container}>
      <div className={style.left_container}>
        <img src="about.jpg" className={style.about_image} />
      </div>
      <div className={style.right_container}>
        <section className={style.right_container_text_wrapper}>
          <p className={style.title}>About Jennifer</p>
          <p>
            You can call me Jenn! My journey has had many twist and turns but I
            wouldn't change it for the world!
          </p>
          <Link href="/about">
            <button className={style.more_info_btn}>View the full story</button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default AboutComponent;
