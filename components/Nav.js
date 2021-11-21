import React, { useState, useEffect, useRef } from "react";
import style from "../styles/Nav.module.css";
import Link from "next/link";
import SocialIcon from "./SocialIcon";

const Nav = () => {
  const [show, setShow] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const node = useRef();

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
        <img src="/main-logo.png" className={style.main_logo} />
      </div>
      <div className={style.header}>
        <div className={style.hamburger_wrapper} onClick={openNavMenu}>
          <div
            className={`${style.line1} ${openMenu && style.slide_line1}`}
          ></div>
          <div
            className={`${style.line2} ${openMenu && style.slide_line2}`}
          ></div>
          <div
            className={`${style.line3} ${openMenu && style.slide_line3}`}
          ></div>
        </div>

        <nav className={`${style.nav}  ${openMenu && style.open}`} ref={node}>
          <div className={style.nav_link_container}>
            <Link href="/">
              <li className={style.nav_list} onClick={openNavMenu}>
                Home
              </li>
            </Link>

            <Link href="/blogs">
              <li className={style.nav_list} onClick={openNavMenu}>
                All Posts
              </li>
            </Link>

            <Link href="/about">
              <li className={style.nav_list} onClick={openNavMenu}>
                About
              </li>
            </Link>
          </div>

          <div className={style.social_media}>
            <SocialIcon position={"header"} />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
