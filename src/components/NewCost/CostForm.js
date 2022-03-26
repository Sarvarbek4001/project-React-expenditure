import React, { useState } from "react";
import "./CostForm.css";
function CostForm(props) {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");
  const nameChangeHandler = (evt) => {
    setInputName(evt.target.value);
  };
  const amountChangeHandler = (evt) => {
    setInputAmount(evt.target.value);
  };
  const dateChangeHandler = (evt) => {
    setInputDate(evt.target.value);
  };
  const submitHandler = (evt) => {
    evt.preventDefault();
    const costData = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };
    props.onSaveCostData(costData);
    setInputName("");
    setInputAmount("");
    setInputDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Nazvaniye</label>
          <input type="text" value={inputName} onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Summa</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            value={inputAmount}
          />
        </div>
        <div className="new-cost__control">
          <label>Data</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            value={inputDate}
            min="2019-01-01"
            step="2022-12-31"
          />
        </div>
        <div className="newe-cost__actions">
          <button type="submit">Dobavit Rasxot</button>
          <button type="button" onClick={props.onCancel}>
            Yopish
          </button>
        </div>
      </div>
    </form>
  );
}

export default CostForm;
