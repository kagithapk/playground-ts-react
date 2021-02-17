import './Header.scss';
import Switch from '../../Switch';

const Header = () => {
  return (
    <>
      <header className="header">
        <section className="header__logo_container">
          <p>This is header</p>
        </section>
        <Switch />
      </header>
    </>
  )
};

export default Header;