import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => {
  return (
    <Layout>
      <div className="flex flex-col h-screen bg-lightmode_bg">
        <h1 className="pl-8 pt-8 font-mono text-4xl text-black">Here is the resume in PDF:</h1>

        <button className="flex place-self-center mt-8 rounded-2xl bg-btn_bg">
          <a href="https://connecthkuhk-my.sharepoint.com/:b:/g/personal/u3569274_connect_hku_hk/EQoX62zIffRHhOfXrt2xjl0BYsbSUgAdceqpkhOQfNJHNg?e=NQKxrH"
          className="p-4 font-mono text-2xl font-semibold text-btn_text decoration-btn_text decoration-2 hover:underline underline-offset-4">
            Click to see resume
          </a>
        </button>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="About" />;

export default AboutPage;
