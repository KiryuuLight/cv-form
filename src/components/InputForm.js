import React, { useState, useEffect } from 'react';

const InputForm = ({ type, icon, haveClass, value }) => {
  const [internalValue, setInternalValue] = useState('');

  useEffect(() => {
    setInternalValue(value || '');
  }, [value]);

  const [statusHover, setStatusHover] = useState('no-hover');

  const handleChange = (event) => setInternalValue(event.target.value);

  const handleHoverIn = () => setStatusHover('hover-effect');

  const handleHoverOut = () => setStatusHover('no-hover');

  const inputText = () => {
    return (
      <input
        type={type}
        value={internalValue}
        onChange={handleChange}
        className={`${statusHover} ${haveClass}`}
        onMouseOver={handleHoverIn}
        onMouseLeave={handleHoverOut}
      />
    );
  };

  return (
    <div className="input-form">
      {icon ? (
        <>
          <img src={icon} alt="icon" className="icon-input" />
          {inputText()}
        </>
      ) : (
        <>{inputText()}</>
      )}
    </div>
  );
};

export default InputForm;
