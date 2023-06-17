import { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';

function SelectMenu({ options, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isOpen &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target) &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (value) => {
    setIsOpen(false);
    onChange(value);
  };

  return (
    <div className="selectmenu">
      <button
        ref={buttonRef}
        className={`selectmenu-button ${isOpen ? "selectmenu-button-open" : "selectmenu-button-closed"}`}
        onClick={handleButtonClick}
      >
        <span className="selectmenu-icon"></span>
        <span className="selectmenu-label">
          {options[0]} {/* Afficher la première option sélectionnée */}
        </span>
      </button>
      {isOpen && (
        <ul ref={menuRef} className="selectmenu-menu">
          {options.map((option, index) => (
            <li
              key={index}
              className={`selectmenu-menu-item`}
              onClick={() => handleMenuItemClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

SelectMenu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onChange: PropTypes.func.isRequired
};

export default SelectMenu;
