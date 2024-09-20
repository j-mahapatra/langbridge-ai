// components/ComboBox.tsx

import { Icons } from '@/lib/icons';
import React, { useEffect, useRef, useState } from 'react';

interface ComboBoxProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
  placeholder?: string;
}

export default function ComboBox({
  inputValue,
  setInputValue,
  options,
  placeholder = 'Select an option',
}: ComboBoxProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const comboBoxRef = useRef<HTMLDivElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsDropdownOpen(true);
  };

  const handleOptionClick = (option: string) => {
    setInputValue(option);
    setIsDropdownOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        setHighlightedIndex((prevIndex) =>
          prevIndex < options.length - 1 ? prevIndex + 1 : 0,
        );
        break;
      case 'ArrowUp':
        setHighlightedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : options.length - 1,
        );
        break;
      case 'Enter':
        if (highlightedIndex >= 0 && highlightedIndex < options.length) {
          handleOptionClick(options[highlightedIndex]);
        }
        break;
      case 'Escape':
        setIsDropdownOpen(false);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        comboBoxRef.current &&
        !comboBoxRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={comboBoxRef}
      className="relative w-full max-w-sm text-sm text-gray-400"
    >
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setIsDropdownOpen(true)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="w-full px-4 py-2 bg-black border border-gray-600 rounded-md  placeholder-gray-400 focus:outline-none cursor-pointer"
      />
      <div className="absolute top-2 right-2">
        <Icons.caretDown size={20} />
      </div>
      {isDropdownOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-600 rounded-md shadow-lg max-h-60 overflow-auto">
          {options.length > 0 ? (
            options.map((option, index) => (
              <li
                key={option}
                onClick={() => handleOptionClick(option)}
                onMouseEnter={() => setHighlightedIndex(index)}
                className={`px-4 py-2 cursor-pointer 
                  ${
                    highlightedIndex === index
                      ? 'bg-[#255fc9] text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
              >
                {option}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">No options found</li>
          )}
        </ul>
      )}
    </div>
  );
}
