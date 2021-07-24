import React, { useState, useEffect } from "react";
import style from "../styles/Nav.module.css";
import Link from "next/link";
import SocialIcon from "./SocialIcon";

const Nav = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 230) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  return (
    <>
      <div className={style.landing_image_container}>
        <img src="/logo1.png" className={style.main_logo} />
      </div>
      <div className={style.header}>
        <nav className={style.nav}>
          <Link href="/">
            <li className={style.nav_list}>Home</li>
          </Link>

          <Link href="/blogs">
            <li className={style.nav_list}>Blogs</li>
          </Link>

          <Link href="/about">
            <li className={style.nav_list}>About</li>
          </Link>

          <Link href="/contact">
            <li className={style.nav_list}>Contact</li>
          </Link>
        </nav>
        <img
          src="/mini_header_logo.png"
          className={`${style.mini_logo} ${show && style.show}`}
        />
        <div className={style.social_media}>
          <SocialIcon position={"header"} />
        </div>
      </div>
    </>
  );
};

export default Nav;
