import { useState } from "react";

const AccordianItem = ({ title, content, noOfItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {title ? (
        <div className="border-b border-gray-200">
          <button
            className="w-full text-left px-4 py-2 flex justify-between items-center focus:outline-none"
            onClick={toggleAccordion}
          >
            <span className="text-lg font-bold">
              {title} ({noOfItem})
            </span>
            <span className="transform transition-transform duration-300">
              {isOpen ? "−" : "+"}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
              isOpen ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="p-4">
              <p>{content}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default AccordianItem;
