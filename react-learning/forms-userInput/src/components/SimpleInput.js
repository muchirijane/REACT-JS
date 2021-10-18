import { useRef, useState } from "react";
const SimpleInput = (props) => {
  const nameRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [isValid, setIsValid] = useState(true);

  const nameHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (enteredName.trim().length === 0) {
      setIsValid(false);
      return;
    }
    if (enteredName.trim().length > 0) {
      console.log(enteredName);
      setIsValid(true);
      console.log(nameRef.current.value);
    }

    setEnteredName("");
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameHandler}
          ref={nameRef}
          value={enteredName}
        />
      </div>
      {!isValid && <p className="error-text">Please enter a valid name</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
