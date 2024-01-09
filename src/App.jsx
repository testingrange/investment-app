import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    ininvest: 10000,
    anninvest: 1200,
    expret: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInputValues) => {
      return {
        ...prevUserInputValues,
        [inputIdentifier]: +newValue,
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userData={userInput} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero</p>
      )}
      {inputIsValid && <Results userInputData={userInput} />}
    </>
  );
}

export default App;
