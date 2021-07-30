import React, { useState, useEffect, useRef } from "react";
import style from "../styles/Nav.module.css";
import Link from "next/link";
import SocialIcon from "./SocialIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

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
        <img src="/logo1.png" className={style.main_logo} />
      </div>
      <div className={style.header}>
        <img
          src="/mini_header_logo.png"
          className={` ${style.show_mini_logo}`}
        />
        <div className={style.hamburger_wrapper} onClick={openNavMenu}>
          {openMenu ? (
            <FontAwesomeIcon
              icon={faTimesCircle}
              className={style.mini_navbar_icon}
            />
          ) : (
            <FontAwesomeIcon icon={faBars} className={style.mini_navbar_icon} />
          )}
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
