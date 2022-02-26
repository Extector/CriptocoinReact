import logo from "../assets/imgs/logo.svg";
import { Form } from "./Form";

export function Register() {
  return (
    <section className="register">
      <div className="container-wrap">
        <div className="welcome">
          <img src={logo} alt="Logo" />

          <h1>
            <span>Hi,</span>
            <span>
              Welcome to <mark>Criptocoins</mark>!
            </span>
          </h1>
        </div>

        <Form />
      </div>
    </section>
  );
}
