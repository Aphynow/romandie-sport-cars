import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function Login({ toggleLogin }) {
  const [inscrip, setInscript] = useState(false);
  const [cookies, setCookie] = useCookies(["user"]);


  const login = useRef(false);
  const password = useRef(false);
  const passwordBis = useRef(false);

  const sendLogin = () => {
    login.current.classList.remove("error");
    password.current.classList.remove("error");
    axios
      .post("/signin", {
        email: login.current.value,
        password: password.current.value,
      })
      .then(({ data }) => {
        let { err, target } = data;
        if (err) {
          let errTarget = document.querySelector(`#${target}`);
          return errTarget.classList.toggle("error");
        }
        setCookie("user", data, { path: "/" });
        return toggleLogin();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleForm = () => {
    console.log("TOggle Form");
    setInscript(!inscrip);
  };

  return (
    <div id="Login">
      <div className="body">
        <div className="close" onClick={toggleLogin}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <div className="field">
          <label htmlFor="login">Email</label>
          <input
            type="text"
            id="login"
            defaultValue={"cerynna@gmail.com"}
            ref={login}
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            defaultValue={"azerty"}
            ref={password}
          />
        </div>
        {inscrip && (
          <div className="field">
            <label htmlFor="passwordBis">Password x2</label>
            <input
              type="password"
              id="passwordBis"
              defaultValue={"azerty"}
              ref={passwordBis}
            />
          </div>
        )}
        <div className="field">
          <div className="btn" onClick={sendLogin}>
            Valider
          </div>
          <span className="inscrip" onClick={toggleForm}>
            {inscrip ? "Sign in" : "Sign up"}
          </span>
        </div>
      </div>
    </div>
  );
}
