import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';

import Button from './Button';
import Section from './Section';
import InputForm from './InputForm';
import TextAreaForm from './TextAreaForm';

const SidebarAbout = ({ inputValues }) => {
  const [academicArr, setAcademicArr] = useState([
    [{ collegue: 'Some Info' }, { career: '' }, { year: '' }],
    [{ collegue: 'Some Info' }, { career: '' }, { year: '' }],
  ]);

  const [experienceArr, setExperienceArr] = useState([
    [{ title: 'Some Info|YearStart-YearEnd' }, { content: '' }],
    [{ title: 'Some Info|YearStart-YearEnd' }, { content: '' }],
  ]);

  useEffect(() => {
    if (inputValues && inputValues.academicFormation) {
      setAcademicArr(
        inputValues.academicFormation.map((formation) =>
          formation.map((item) => ({ ...item }))
        )
      );
    }

    if (inputValues && inputValues.experienceInfo) {
      setExperienceArr(
        inputValues.experienceInfo.map((formation) =>
          formation.map((item) => ({ ...item }))
        )
      );
    }
  }, [inputValues]);

  const handleAcademicValue = () => {
    setAcademicArr((previousValue) => [
      ...previousValue,
      [{ collegue: 'Some Information' }, { career: '' }, { year: '' }],
    ]);
  };

  const handleExperienceValue = () => {
    setExperienceArr((previousValue) => [
      ...previousValue,
      [{ title: 'Some Information' }, { content: '' }],
    ]);
  };

  return (
    <div className="sidebar-about">
      <TextAreaForm
        haveClass="sidebar-about-title"
        rows={2}
        columns={20}
        value={inputValues.name}
      />
      <InputForm haveClass="sidebar-about-career" value={inputValues.career} />

      <Section title="Education" haveClass="m-1">
        {academicArr.map((value) => {
          return (
            <Section
              title={value[0].collegue}
              haveClass="sub-section"
              key={uniqid()}
            >
              <InputForm value={value[1].career} />
              <InputForm value={value[2].year} />
            </Section>
          );
        })}

        <Button
          value="Add"
          hasIcon={true}
          haveClass="width-65"
          onClick={handleAcademicValue}
        />
      </Section>

      <Section title="Employment">
        {experienceArr.map((value) => {
          return (
            <Section
              title={value[0].title}
              haveClass="sub-section"
              key={uniqid()}
            >
              <TextAreaForm value={value[1].text} rows={10} />
            </Section>
          );
        })}

        <Button
          value="Add"
          hasIcon={true}
          haveClass="width-65"
          onClick={handleExperienceValue}
        />
      </Section>
    </div>
  );
};

export default SidebarAbout;
