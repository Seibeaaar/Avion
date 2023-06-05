import React from "react";
import {
  LinkedinFilled,
  FacebookFilled,
  GithubFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import footerLinks from "src/constants/footerLinks";
import "./Footer.styles.scss";

const socialLinks = [
  {
    icon: LinkedinFilled,
    href: "https://www.linkedin.com/in/yurii-baryliak/",
  },
  {
    icon: FacebookFilled,
    href: "https://www.facebook.com/yuriy.barylyak.5/",
  },
  {
    icon: GithubFilled,
    href: "https://github.com/Seibeaaar",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-content">
        <article className="content-info">
          <div>
            <h4 className="content-info--logo">Avion</h4>
            <p className="content-info--address">21 New York Street</p>
            <p className="content-info--address">New York City</p>
            <p className="content-info--address">United States of America</p>
            <p className="content-info--address">432 34</p>
          </div>
          <div className="content-social">
            <p className="content-social--title">Social Media</p>
            <div className="content-social--row">
              {socialLinks.map((sl) => {
                const Icon = sl.icon;
                return (
                  <a
                    key={sl.href}
                    href={sl.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="content-social--icon" />
                  </a>
                );
              })}
            </div>
          </div>
        </article>
        <article className="content-links">
          {footerLinks.map((fl) => (
            <div key={fl.title}>
              <p className="content-links--title">{fl.title}</p>
              {fl.links.map((link) => (
                <Link
                  className="content-links--item"
                  key={link.href}
                  to={link.href}
                >
                  <p className="content-links--text">{link.name}</p>
                </Link>
              ))}
            </div>
          ))}
        </article>
      </section>
      <section className="footer-copyright">
        <p className="footer-copyright--text">Copyright 2023 Avion LTD</p>
      </section>
    </footer>
  );
};

export default Footer;
