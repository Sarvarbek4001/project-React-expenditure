import React, { useState } from "react";
import Cost from "./components/Costs/Cost";
import NewCost from "./components/NewCost/NewCost";
const INITIAL__COSTS = [
  {
    id: "c1",
    date: new Date(2021, 2, 12),
    description: "Xolodilnik",
    amount: 999,
  },
  {
    id: "c2",
    date: new Date(2021, 11, 25),
    description: "MacBook",
    amount: 1254,
  },
  {
    id: "c3",
    date: new Date(2022, 4, 5),
    description: "Ko'ylak",
    amount: 49,
  },
];
function App() {
  const [costs, setCosts] = useState(INITIAL__COSTS);
  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };
  return (
    <div className="App">
      <NewCost onAddCost={addCostHandler} />
      <Cost costs={costs} />
    </div>
  );
}

export default App;
