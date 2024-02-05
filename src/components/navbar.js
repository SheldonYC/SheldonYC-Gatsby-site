import { Link } from 'gatsby';
import React from "react";

const Navbar = ({pages}) => {
  return (
    <header>
      <nav>
        {/* Navbar for large screen*/}
        <div className="flex flex-row justify-between max-h-32 px-6 py-4 bg-primary_color">
          <div>
            <Link to="/" >
              <p className="font-mono font-bold text-2xl text-banner_text">
                SheldonYC
              </p>
            </Link>
          </div>
          {/* Tabs for all pages */}
          <div className="flex flex-row justify-end">
            {pages.map(
              (page, index) => (
                <Link key={index} to={page.address}
                  className="title_text"
                  activeClassName = "underline" >
                    {page.name}
                </Link>
              )
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
