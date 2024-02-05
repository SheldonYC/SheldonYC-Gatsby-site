import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import {FaCode, FaChartBar, FaRobot} from "react-icons/fa";
import Layout from "../components/layout";
import Skillsets from "../components/skillsets";
import Seo from "../components/seo";

const IndexPage = () => {
  const bio = `I am a final year student studying computer science and statistics with a strong interest in the latest technologies. Experienced in working with machine learning, software development, and large language models. I consider myself skilled in breaking down problems into actionable parts and implementing technological solutions. I am passionate about learning new skills and knowledge for future challenges. I am eager to make an impact by taking ownership of different projects and collaborating with colleagues.`;

  const skillsets = [
    {
      name:"Web Development",
      description:"I build websites for developers to showcase projects and write blogs.",
      dev_tools:["Raect.js", "Tailwind CSS", "JavaScript", "GraphQL", "Git", "Contentful", "Netlify"],
      icon: FaCode,
    },
    {
      name:"Data Science",
      description:"I perform data cleansing and SQL querys. I discover and visualize patterns with machine learning algorithms.",
      dev_tools:["Python", "Numpy", "Pandas", "SQL", "Matplotlib", "Scikit-learn"],
      icon: FaChartBar,
    },
    {
      name:"Natural Language Processing",
      description:"I use Retrieval Augemented Generation with pretrained large language models to solve people's queries.",
      dev_tools:["Python", "Hugging Face", "Gradio"],
      icon: FaRobot,
    }
  ];
  return (
    <Layout>
      <div className="flex flex-col h-auto bg-lightmode_bg">
        <div className="flex flex-row">
          {/* Section with bio and button to about page */}
          <div className="flex flex-col"> 
            <p className="px-8 pt-8 font-mono text-xl text-primary_color">
              {bio}
            </p>
            <button className="flex place-self-center mt-16 rounded-2xl bg-btn_bg">
              <Link to="/about" className="p-4 font-mono text-2xl font-semibold text-btn_text decoration-btn_text decoration-2 hover:underline underline-offset-4">
                Checkout my resume
              </Link>
            </button>
          </div>
          {/* Image of myself */}
          <StaticImage
            src={"../images/my-image.jpg"}
            alt={"A picture of me"}
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
            width={1600} height={2400} />
        </div>
        {/* Section of skillsets */}
        <h2 className="mt-8 font-mono self-center font-extrabold text-4xl text-primary_color">My skillset:</h2>
        <Skillsets skillsets={skillsets} />
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
