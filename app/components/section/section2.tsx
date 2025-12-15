'use client '
import React from 'react';
import GradientAccordion from '../layout/accordion';
import TextReveal from '../layout/textReveal';
import Marquee from '../layout/marque';
import CodeProfile from '../layout/cardSkills';

// --- SVG Icon Components ---
// These are the icon components for the social media links in the footer.
// They are self-contained, so no external libraries are needed.

export default function Section2() {
    const techItems = [
    { name: "NodeJS", img:"images/nodejs.png" },
    { name: "HTML5", img: "images/html5.png " },
    { name: "CSS", img: "images/CSS.png" },
    { name: "React", img: "images/React.png" },
    { name: "NextJS", img: "images/NextJS.png" },
    { name: "JavaScript", img: "images/Javascript.png" },
    { name: "Tailwind CSS", img: "images/Tailwindcss.png" },
    { name: "Typescript", img: "images/Typescript.png" },
    { name: "Laravel", img: "images/Laravel.png" },
    { name: "PHP", img: "images/PHP.png" },
    { name: "Python", img: "images/Python.png" },
    { name: "Bootstrap", img: "images/Bootstrap.png" },
    { name: "CSS", img: "images/CSS.png" },
    { name: "Github", img: "images/Github.png" },
    { name: "MySQL", img: "images/Mysql.png" },
    { name: "Visual Basic", img: "images/Visualbasic.png" },
        
  ];
    return (
        <>
            <div className="">
                <div className='mb-16'>
                    <TextReveal />
                </div>
                <div>
                    <div className='mb-16'>
                    <GradientAccordion />
                </div>
                <div className='mb-16'>
                    <CodeProfile />
                </div>
                </div>
                <div>
                    <Marquee  speed={50} pauseOnHover className="flex gap-8 px-10">
                        {techItems.map((item, index) => (
                            <div
                                key={index}
                                className="min-w-[150px] h-[150px] bg-[#111827] rounded-xl
                                shadow-lg flex flex-col items-center justify-center gap-4 
                                border border-gray-700 hover:scale-105 transition-all"
                            >
                                <img src={item.img} className="h-10" />
                                <p className="text-white font-semibold">{item.name}</p>
                            </div>
                        ))}
                </Marquee>
                </div>
                    
            </div>
        </>
    )
}