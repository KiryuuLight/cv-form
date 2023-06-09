import InputForm from './InputForm';

const Section = ({ title, haveClass, children }) => {
  return (
    <div className={`section`}>
      <InputForm
        value={title}
        haveClass={`hero-text-section ${haveClass} `}
      ></InputForm>
      {children}
    </div>
  );
};

export default Section;
