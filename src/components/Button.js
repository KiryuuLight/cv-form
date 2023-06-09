import addSvg from '../icons/add.svg';

const Button = ({ value, hasIcon, haveClass, onClick }) => {
  const handleOnClick = () => onClick();

  return hasIcon ? (
    <div className={`btn-container ${haveClass}`} onClick={handleOnClick}>
      <button type="button">{value}</button>
      <img src={addSvg} alt="" className="btn-icon" />
    </div>
  ) : (
    <div className={`btn-container ${haveClass}`} onClick={handleOnClick}>
      <button type="button">{value}</button>
    </div>
  );
};

export default Button;
