import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Layout = ({ children }) => {
  const pages = [
    { name: "Home", address: "/" },
    { name: "About", address: "/about" },
    { name: "Contact", address: "/contact" },
  ];

  const socials = [
    {
      name: "Github",
      address: "https://github.com/SheldonYC",
      icon: FaGithub,
    },
    {
      name: "Linkedin",
      address: "https://www.linkedin.com/in/sheldonng/",
      icon: FaLinkedin,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen justify-start">
      <Navbar pages={pages}/>
      <main className="bg-lightmode_bg">{children}</main>
      <Footer pages={pages} socials={socials}/>
    </div>
  );
};

export default Layout;
