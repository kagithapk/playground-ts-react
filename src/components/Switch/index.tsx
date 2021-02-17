import { FC, FormEvent } from "react";
import './Switch.scss';

const Switch: FC = () => {
  const updateTheme = (event: FormEvent<HTMLInputElement>): void => {
    const value: boolean = event.currentTarget.checked;
    document.documentElement.setAttribute('data-theme', value ? 'dark' : 'light');
  };

  return (
    <>
      <section className="switch__container">
        <label className="switch">
          <input id="toggle" type="checkbox" onChange={updateTheme} />
          <span className="slider" />
        </label>
      </section>
    </>
  )
};

export default Switch;