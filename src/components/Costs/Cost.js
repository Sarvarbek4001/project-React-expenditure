import React from "react";
import "./Cost.css";
import CostList from "./CostList";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import CostsDiagram from "./CostsDiagram";

function Cost(props) {
  const [selectedYear, setSelectedYear] = React.useState("2021");
  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostsDiagram costs={filteredCosts}/>
        <CostList costs={filteredCosts} />
      </Card>
    </>
  );
}

export default Cost;
