"use client";
import BasicModalView from "@/components/modal";
import { cn } from "@/lib/utils";
import React, {
  ComponentPropsWithoutRef,
  FC,
  ReactNode,
} from "react";


interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

export const BentoGrid: FC<BentoGridProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  image: string;
  description: string;
  href?: string;
  github: string;
}


export const BentoCard: FC<BentoCardProps> = ({
  name,
  className,
  image,
  description,
  href,
  github,
  ...props
}) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-xl p-4",

      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",

      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
    {...props}
  >
    <img className="absolute inset-0 h-full w-full" src={image} alt="Background" />

    {href && (
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
        )}
      >
        <div className="pointer-events-auto">
          <BasicModalView name={name} image={image} href={href} github={github}/>
        </div>
      </div>
    )}
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);




type Feature = {
  name: string;
  description: string;
  href: string;
  github: string,
  className: string;
  image: string;
};

const features: Feature[] = [
  {
    name: "Watch Me",
    description: "Generate and export detailed reports with a single click.",
    href: "https://watchme11.netlify.app/",
    github: "",
    className: "lg:col-span-1",
    image: "project/MyMovie.png",
  },
  {
    name: "Admin",
    description: "Connect with your favorite tools and services effortlessly.",
    href: "https://admin1118.netlify.app/",
    github: "",
    className: "lg:col-span-2",
    image: "project/admin.png",
  },
  {
    name: "Old Portfolio",
    description: "Work together with your team in real-time on any project.",
    href: "https://myportfoliobtapel.netlify.app/",
    github: "",
    className: "lg:col-span-2",
    image: "project/OldPorfolio.png",
  },
  {
    name: "Dental Clinic",
    description:"Deploy your applications anywhere in the world with our robust infrastructure.",
    href: "https://dentalclinicheavenlytouch.netlify.app/",
    github: "",
    className: "lg:col-span-1",
    image: "project/Dental.png"
  },
  
];

export default function BentoGridCom() {
  return (
    <>
        <div className='mb-10 max-sm:text-center max-lg:text-center px-4'>
            <p className="mb-2 text-blue-700 text-lg">My work</p>
            <h1 className="text-4xl dark:text-white font-bold">Project</h1>
        </div>
        <div className="w-full p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
            <BentoGrid>
            {features.map((feature, idx) => (
                <BentoCard key={idx} {...feature} />
            ))}
            </BentoGrid>
        </div>
    </div>
    </>
  );
}
