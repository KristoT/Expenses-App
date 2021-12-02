import react from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (data) => {
  const chartDatatPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of data.expenses) {
    const expenseMonth = expense.date.getMonth(); //Starting at 0 => January => 0
    chartDatatPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDatatPoints} />;
};

export default ExpensesChart;
