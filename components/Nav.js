import React, { useState, useEffect } from "react";
import style from "../styles/Nav.module.css";
import Link from "next/link";
import SocialIcon from "./SocialIcon";

const Nav = () => {
  const [show, setShow] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 230) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  const openNavMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <div className={style.landing_image_container}>
        <img src="/logo1.png" className={style.main_logo} />
      </div>
      <div className={style.header}>
        <img
          src="/mini_header_logo.png"
          className={` ${style.show_mini_logo}`}
        />
        <div className={style.hamburger_wrapper} onClick={openNavMenu}>
          <div className={style.hamburger}></div>
          <div className={style.hamburger}></div>
          <div className={style.hamburger}></div>
        </div>

        <nav className={`${style.nav}  ${openMenu && style.open}`}>
          <div className={style.nav_link_container}>
            <Link href="/">
              <li className={style.nav_list} onClick={openNavMenu}>
                Home
              </li>
            </Link>

            <Link href="/blogs">
              <li className={style.nav_list} onClick={openNavMenu}>
                All Post
              </li>
            </Link>

            <Link href="/about">
              <li className={style.nav_list} onClick={openNavMenu}>
                About
              </li>
            </Link>

            <Link href="/contact">
              <li className={style.nav_list} onClick={openNavMenu}>
                Contact
              </li>
            </Link>
          </div>
          <img
            src="/mini_header_logo.png"
            className={`${style.mini_logo} ${show && style.show}`}
          />
          <div className={style.social_media}>
            <SocialIcon position={"header"} />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
