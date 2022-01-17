import userData from "@constants/data";
import React from "react";

export default function Experience() {
  return (
    <section className="bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-black">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Experience
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-black -mt-4 pb-16">
        <div className="grid grid-cols-1 dark:bg-black max-w-xl mx-auto pt-40">
          {userData.experience.map((exp, idx) => (
            <>
              <ExperienceCard
                key={idx}
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === userData.experience.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-black dark:bg-gray-500 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-black dark:bg-gray-500 rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-black">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Certifications
        </h1>
      </div>
      <section className="text-gray-600 body-font">
        <div className="max-w-6xl container px-5 sm:py-24 mx-auto">
          <div className="flex flex-wrap -m-2">
            {userData.certifications.map((certificate, idx) => (
              <>
                <CertificationCard
                  key={idx}
                  name={certificate.name}
                  company={certificate.company}
                  link={certificate.link}
                />
              </>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

const ExperienceCard = ({ title, desc, year, company }) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-500">
        {year}
      </h1>
      <h1 className="font-semibold text-xl dark:text-black">{title}</h1>
      <p className="text-gray-500">{company}</p>
      <p className="text-gray-600 my-2">{desc}</p>
    </div>
  );
};

const CertificationCard = ({ name, company, link }) => {
  return (
    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
      <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg dark:bg-white">
        <div className="flex-grow">
          <h2 className="text-gray-900 title-font font-medium">{name}</h2>
          <p className="text-gray-500">{company}</p>
          <a
            href={link}
            target="_blank"
            className="font-semibold group flex flex-row space-x-2 w-full items-center text-gray-900"
          >
            <p className="text-sm">View Certificate </p>
            <div className="transform group-hover:translate-x-2 transition duration-300">
              &rarr;
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
