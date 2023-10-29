import { useState } from "react";

const btnStyle = { backgroundColor: "#7950f2", color: "#fff" };

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  return (
    <>
      <Steps />
      {/* <Counter />
      <Counter /> */}
    </>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((c) => c + 1);
  };
  const handleDecrement = () => {
    setCount((c) => c - 1);
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

const Steps = () => {
  // Default Value
  // A setter function to update our state value
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (step <= 1) return;
    // setStep(step - 1);
    setStep((s) => s - 1);
  };

  const handleNext = () => {
    if (step === messages.length) return;
    // setStep(step + 1);
    // setStep(step + 1);
    setStep((s) => s + 1);
    // setStep((s) => s + 1);
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button style={btnStyle} onClick={handlePrevious}>
              Previous
            </button>
            <button style={btnStyle} onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
