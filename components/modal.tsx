"use client";

import React, { useState } from "react";
import Modal from "../components/ui/modal";
import Button from "./ui/button";

interface Props {
  name?: string;
  image?: string;
  href?: string;
  github?: string;
}

const BasicModalView: React.FC<Props> = ({name,image,href,github}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-4">
      <Button onClick={() => setIsOpen(true)} variant="default" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 max-sm:text-xl">
        View More
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={name}
      >
        <div className="space-y-4">
          <div className="shadow-sm">
            <img src={image} alt="Upload Image" className="h-72 w-full"/>
          </div>
          <div className="flex justify-between">
            <div className="gap-2 font-medium">
              <Button className="mr-1">
                  <a href={href} target="_blank">
                    View Web
                  </a>
              </Button>
             <Button className="bg-blue-700">
                  <a href={github} target="_blank">
                    Github
                  </a>
             </Button>
            </div>
            <Button onClick={() => setIsOpen(false)} variant="secondary">
              Close
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BasicModalView;
