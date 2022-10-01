import React, { useState } from "react";
import "./index.css";
import { PASSENGER, LABEL } from "../../constant";

interface SpinButtonProps {
  label: typeof LABEL.ADULT;
}

const SpinButton = ({ label }: SpinButtonProps) => {
  const [passenger, setPassenger] = useState(1);

  const handleIncrease = () => {
    if (passenger === PASSENGER.MAX) {
      alert(`선택할 수 있는 승객은 최대 ${PASSENGER.MAX}명입니다.`);
      return;
    }
    setPassenger((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (Number(passenger) === PASSENGER.MIN) {
      alert(`승객은 최소 ${PASSENGER.MIN}명 이상이어야 합니다.`);
      return;
    }
    setPassenger((prev) => prev - 1);
  };

  const handleChangePassenger = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const value = Number(target.value);

    if (value < PASSENGER.MIN) {
      alert(`승객은 최소 ${PASSENGER.MIN}명 이상이어야 합니다.`);
      return;
    }
    if (value > PASSENGER.MAX) {
      alert(`선택할 수 있는 승객은 최대 ${PASSENGER.MAX}명입니다.`);
      return;
    }
    setPassenger(value);
  };

  return (
    <section className="spin-container">
      <h2>승객 선택</h2>
      <label className="passenger-label" htmlFor="passenger-input">
        {label}
      </label>
      <button
        type="button"
        aria-label={`${label} 탑승자 한 명 줄이기`}
        className="button"
        onClick={handleDecrease}
      >
        ➖
      </button>
      <input
        type="number"
        min={1}
        max={3}
        id="passenger-input"
        value={passenger}
        onChange={handleChangePassenger}
      />
      <button
        aria-label={`${label} 탑승자 한 명 늘이기`}
        type="button"
        className="button"
        onClick={handleIncrease}
      >
        ➕
      </button>
    </section>
  );
};

export default SpinButton;
