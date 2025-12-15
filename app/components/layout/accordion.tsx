"use client";
import { details, div, h1, ul } from "motion/react-client";
import React, { useState } from "react";

interface ExperienceItem{
  project : string;
  detail : string[];
}

interface FAQItem {
  company: string;
  year: string;
  role: string;
  experience: ExperienceItem[];
}

interface AccordionItemProps {
  company: string;
  year: string;
  role: string;
  experience: ExperienceItem[];
}

export default function GradientAccordion() {
  const faqData: FAQItem[] = [
    {
      company: "Fujitsu",
      year:"2022-2025",
      role:"Application System Engineer",
      experience: [
        {
          project: "Internal Project",
          detail:[
            "Lead the design and development for automation.",
            "Create data in SharePoint List.",
            "Build design by using Power Apps.",
            "Create dataflow and export the data to excel sheet using Power Automate and also additional program using typescript."
          ],
        },
        {
          project:"External Project",
          detail:[
            "Collaborate with clients develop the system structure, data structure, and fix errors. ",
            "Collaborate with clients develop the system structure, data structure, and fix errors.",
            "Create a program using PHP, Javascript, MySQL, HTML, CSS.",
            "Create program evidence for the actual result.",
            "Work within tight deadlines to ensure projects were completed."
          ]
        }
      ],
    },
    {
      company:"DENR",
      year:"2021",
      role:"Technical Support Staff",
      experience:[
        {
          project:"Mapping",
          detail:[
            "Worked in a team for a 3-month project called Survey and Registration of Protected Area Occupants (SRPAO).",
            "Create maps using ArcgisPro of the surveyed farm lots within the Protected Area.",
            "Import kml/kmz files to Arcgis Pro and export to pdf/jpeg files.",
            "Import kml/kmz files to Arcgis Pro and export to pdf/jpeg files.",
            "Assist in the monitoring of the accomplishments of enumerators and data encoders."
          ]
        }
      ]
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-10">
        Work Experience
      </h1>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            company={item.company}
            year={item.year}
            role={item.role}
            experience={item.experience}
          />
        ))}
      </div>
    </div>
  );
}

function AccordionItem({ company, year, role, experience }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="p-0.5 rounded-lg bg-gradient-to-r from-cyan-400 to-pink-500 dark:from-cyan-500 dark:to-pink-600">
      <div className="bg-gray-50 dark:bg-gray-800 rounded-md">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center text-left p-4 focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          <span className="text-lg font-medium text-gray-900 dark:text-white">
            {company}
          </span>
          <span
            className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600 dark:text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <h1 className="font-bold text-xl">{role}</h1>
            <p className="text-gray-700 dark:text-gray-300">({year})</p>
            <br />
            {
              experience.map((experienceItem, index) => (
                <div key={index} className="">
                  <h1 className="font-medium mb-1">{experienceItem.project}</h1>
                  <div>
                    <p>{experienceItem.detail}</p>
                    <br />
                  </div>
                </div> 
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
