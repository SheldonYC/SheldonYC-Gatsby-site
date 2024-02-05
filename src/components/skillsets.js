import React from 'react';

const Skillsets = ({skillsets}) => {

  return (
    <div  className="flex flex-row h-auto mx-auto my-8 justify-between">
      {skillsets.map((skillset, index) => {
        return (
          <div key={index} className="flex flex-col flex-1 items-center justify-start mx-8 p-4 max-w-96 rounded-md bg-primary_color text-banner_text text-justify">
            <skillset.icon className="mt-4 fill-banner_text text-6xl" />
            <h2 className="mt-4 font-mono font-bold text-4xl">{skillset.name}</h2>
            <p className="mt-4 font-mono text-lg">{skillset.description}</p>
            <h3 className="mt-4 font-mono text-2xl self-start">Dev tools used:</h3>
            <div className="mt-2 flex flex-col">
              <ul>
                {skillset.dev_tools.map((tool, index) => {
                  return (
                    <li key={index} className="mt-1 font-mono text-xl">{tool}</li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skillsets;
