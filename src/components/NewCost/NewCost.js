import React, { useState } from "react";
import CostFrom from "./CostForm";
import "./NewCost.css";
function NewCost(props) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
    setIsFormVisible(false);
  };
  const inputCostDataHandler = () => {
    setIsFormVisible(true);
  };
  const cancelCostHandler = () => {
    setIsFormVisible(false);
  };
  return (
    <div className="new-cost">
      {!isFormVisible && (
        <button onClick={inputCostDataHandler}>Yangi rasxot qo'shish</button>
      )}
      {isFormVisible && (
        <CostFrom
          onSaveCostData={saveCostDataHandler}
          onCancel={cancelCostHandler}
        />
      )}
    </div>
  );
}

export default NewCost;
