import React, { useState } from 'react'

const Pregunta = (props) => {
    const { pregunta, respuesta } = props;
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleOpen = () => {
      setIsOpen(!isOpen);
    };
    
    return (
      <div className="border border-gray-300 rounded-lg bg-white px-4 py-3 mb-3">
        <button
          onClick={toggleOpen}
          className="w-full flex items-center justify-between text-left hover:opacity-80 transition-opacity"
        >
          <span className="font-medium text-sm sm:text-base pr-4">
            {pregunta}
          </span>
          <img
            src="/img/faq_arrow.png"
            alt="Toggle"
            className={`
              w-6 h-6 flex-shrink-0
              transition-transform duration-300
              ${isOpen ? "rotate-180" : ""}
            `}
          />
        </button>
  
        <div
          className={`
            overflow-hidden
            transition-all duration-300 ease-in-out
            ${isOpen ? "max-h-96 mt-3" : "max-h-0"}
          `}
        >
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {respuesta}
          </p>
        </div>
      </div>
    );
}

export default Pregunta