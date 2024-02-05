import React from "react";
import { Link } from "gatsby";

const Footer = ({pages, socials}) => {
  return (
    <footer className="flex flex-col mt-auto bg-primary_color">
      {/* Tabs for all pages */}
      <div className="flex flex-row justify-center pt-8">
        {pages.map((page, index) => (
          <Link key={index} to={page.address}
            className="title_text">
              {page.name}
          </Link>
          ))}
      </div>

      <div className="flex flex-row justify-center pt-8">
        {socials.map((social, index) => {
          return (
          <a key={index} href={social.address}
            className="px-8">
            <social.icon className="fill-banner_text text-2xl" />
          </a>
        )})}
      </div>

      <div className="flex flex-row justify-center py-4">
        <p className="font-mono text-banner_text text-lg">&copy;2024 SheldonYC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
