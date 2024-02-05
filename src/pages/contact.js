import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const ContactPage = () => {
  const email = "u3569274@connect.hku.hk"; // to be changed to query from graphQL

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      alert("Copied email address!");
    } catch (err) {
      alert("Failed to copy text: ", err);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col h-screen bg-lightmode_bg">
        <h1 className="pl-8 pt-8 font-mono text-4xl text-black">Got an opportunity to offer?</h1>
        <h1 className="pl-8 pt-8 font-mono text-4xl text-black">Drop me an email at: {email}</h1>
        <button
          onClick={copyToClipboard}
          className="flex place-self-center mt-8 rounded-2xl bg-btn_bg">
          <p className="p-4 font-mono text-2xl font-semibold text-btn_text decoration-btn_text decoration-2 hover:underline underline-offset-4">
            Click to copy email address
          </p>
        </button>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default ContactPage;
