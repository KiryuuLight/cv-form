import React, { useState, useEffect } from 'react';

const TextAreaForm = ({ value, haveClass, rows, cols }) => {
  const [internalValue, setInternalValue] = useState('');

  const [statusHover, setStatusHover] = useState('no-hover');
  const [resizable, setResizable] = useState(false);

  useEffect(() => {
    console.log('Estoy imprimiendo algo cada vez value cambia');
    setInternalValue(value);
  }, [value]);

  const handleChange = (event) => setInternalValue(event.target.value);

  const handleHoverIn = () => {
    setStatusHover('hover-effect');
    setResizable(true);
  };

  const handleHoverOut = () => {
    setStatusHover('no-hover');
    setResizable(false);
  };

  return (
    <textarea
      style={{ resize: resizable ? 'both' : 'none' }}
      className={`${statusHover} ${haveClass}`}
      onChange={handleChange}
      onMouseOver={handleHoverIn}
      onMouseLeave={handleHoverOut}
      value={internalValue}
      rows={rows}
      cols={cols}
    ></textarea>
  );
};

export default TextAreaForm;
