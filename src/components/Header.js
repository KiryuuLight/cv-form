import logo from '../icons/book.svg';

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="logo" className="logo" />
      <p>CV GENERATOR</p>
    </nav>
  );
};

export default Header;
