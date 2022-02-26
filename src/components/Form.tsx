import { useRef, useState, useEffect } from "react";
import ActiveEye from "../assets/icons/active.svg";
import InactiveEye from "../assets/icons/inactive.svg";

const iconColors = { grey: "#7d7d7d", purple: "#583c91" };
const defaultColor = iconColors.grey;

export function Form() {
  const inputPassword = useRef<HTMLInputElement>(null);
  const [passwordIsHidden, setPasswordIsHidden] = useState(true);

  const [emailColor, setEmailColor] = useState(defaultColor);
  const [lockColor, setLockColor] = useState(defaultColor);

  function hidepassword() {
    setPasswordIsHidden((hidden) => !hidden);
  }

  useEffect(() => {
    inputPassword.current?.focus();
  }, [passwordIsHidden]);

  return (
    <form className="form">
      <h2>
        <mark>Register</mark> your account
      </h2>

      <div className="row">
        <div className="form-group">
          <input
            className="form-input"
            id="firstName"
            type="name"
            name="firstName"
            placeholder=" "
          />
          <label htmlFor="firstName">First Name</label>
        </div>

        <div className="form-group">
          <input
            className="form-input"
            id="lastName"
            type="name"
            name="lastName"
            placeholder=" "
          />
          <label htmlFor="lastName">Last Name</label>
        </div>
      </div>

      <div className="form-group">
        <i
          className="fa-solid fa-envelope icon"
          style={{ color: emailColor }}
        ></i>
        <input
          className="form-input"
          id="email"
          type="email"
          name="email"
          placeholder=" "
          onFocus={() => setEmailColor(iconColors.purple)}
          onBlur={() => setEmailColor(iconColors.grey)}
        />
        <label htmlFor="email">Your Email</label>
      </div>

      <div className="form-group">
        <div className="password">
          <i className="fa-solid fa-lock icon" style={{ color: lockColor }}></i>
          <input
            className="form-input"
            id="password"
            type={passwordIsHidden ? "password" : "text"}
            name="password"
            placeholder=" "
            ref={inputPassword}
            onFocus={() => setLockColor(iconColors.purple)}
            onBlur={() => setLockColor(iconColors.grey)}
          />
          <label htmlFor="password">Password</label>

          <button
            id="button-show-pass"
            type="button"
            onClick={() => hidepassword()}
          >
            <img
              className="img_svg"
              src={passwordIsHidden ? ActiveEye : InactiveEye}
            />
          </button>
        </div>
      </div>

      <div className="check">
        <input id="checkbox" type="checkbox" name="Agreement" />
        <label htmlFor="checkbox">
          I agree to the <a href="#">Terms and Conditions</a>
        </label>
      </div>

      <button type="submit" name="button" className="button" id="form_button">
        Create an Account
      </button>
    </form>
  );
}
