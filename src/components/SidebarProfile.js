import React, { useState, useRef } from 'react';
import uniqid from 'uniqid';

import profileImg from '../img/profile.jpg';
import worldSvg from '../icons/world.svg';
import phoneSvg from '../icons/phone.svg';
import homeSvg from '../icons/home.svg';

import InputForm from './InputForm';
import TextAreaForm from './TextAreaForm';
import Section from './Section';

const ImageProfile = () => {
  const [srcImage, setSrcImage] = useState(profileImg);
  const [hoverState, setHoverState] = useState('');

  const inputRef = useRef(null);

  const handleHoverOn = () => setHoverState('hover-effect-img');
  const handleHoverOut = () => setHoverState('');

  const handleOpenFile = () => inputRef.current.click();

  const handleUploadFile = (e) => {
    console.log(e.target.files[0]);
    const imgSrc = URL.createObjectURL(e.target.files[0]);
    setSrcImage(imgSrc);
  };

  return (
    <>
      <input
        type="file"
        name="img"
        accept="image/*"
        style={{ display: 'none' }}
        ref={inputRef}
        onChange={handleUploadFile}
      />

      <img
        src={srcImage}
        alt="Profile"
        className={`img-profile ${hoverState}`}
        onClick={handleOpenFile}
        onMouseEnter={handleHoverOn}
        onMouseLeave={handleHoverOut}
      />
    </>
  );
};

const SidebarProfile = ({ inputValues }) => {
  return (
    <div className="sidebar-profile">
      <ImageProfile />

      <Section title="Personal Details">
        <InputForm type="tel" icon={phoneSvg} value={inputValues.tel} />
        <InputForm type="email" icon={worldSvg} value={inputValues.email} />
        <InputForm type="text" icon={homeSvg} value={inputValues.address} />
      </Section>

      <Section title="Summary">
        <TextAreaForm value={inputValues.perfil} rows={8} />
      </Section>

      <Section title="Languages">
        {inputValues.languages ? (
          inputValues.languages.map((value) => {
            return <InputForm key={uniqid()} type="text" value={value} />;
          })
        ) : (
          <>
            <InputForm type="text" />
            <InputForm type="text" />
            <InputForm type="text" />
          </>
        )}
      </Section>

      <Section title="References">
        <InputForm type="text" value={inputValues.references} />
      </Section>
    </div>
  );
};

export default SidebarProfile;
