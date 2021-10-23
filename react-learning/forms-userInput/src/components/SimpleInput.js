import { useState } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");

  const nameIsValid = enteredName.trim() !== "";
  const nameInputIsInValid = !nameIsValid && enteredNameTouched;

  let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const emailIsValid = emailFormat.test(enteredEmail);
  const emailInputIsInValid = !emailIsValid && emailIsTouched;

  let formIsValid = false;
  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }
  const nameHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const emailHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };
  const emailInputBlurHandler = () => {
    setEmailIsTouched(true);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);
    setEmailIsTouched(true);

    if (enteredName.trim() === "") {
      return;
    }
    if (enteredEmail.trim() === "") {
      return;
    }

    console.log(enteredName);

    setEnteredName("");
    setEnteredEmail("");
    setEnteredNameTouched(false);
    setEmailIsTouched(false);
  };

  const nameInputClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInValid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameHandler}
          value={enteredName}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInValid && (
          <p className="error-text">Please enter a valid name</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailInputIsInValid && <p>Please add a valid email address</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
