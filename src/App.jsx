import { useState } from "react";
import TableRow from "./components/TableRow";
import UserInput from "./components/UserInput";
import { formatter, calculateInvestmentResults } from "./utils/investment";
import { keyToID, cols } from "./utils/constants";

function App() {
  const [dataEntries, setDataEntries] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleInputValue(e) {
    // console.log(e.target.value);
    // console.log(e.target.id);
    let id = e.target.id;

    if (e.target.value >= 0) {
      setDataEntries((prevData) => {
        let updatedData = {
          ...prevData,
          [keyToID[id]]: +e.target.value,
        };
        return updatedData;
      });
    }

    // console.log(dataEntries);
  }

  let dataDerived = [];

  let allFieldsFilled =
    dataEntries.annualInvestment &&
    dataEntries.duration &&
    dataEntries.expectedReturn &&
    dataEntries.initialInvestment;

  if (allFieldsFilled) {
    dataDerived = calculateInvestmentResults(dataEntries);
    console.log(dataDerived);
    console.log(dataEntries);
  }

  let totalIntrest = 0;
  let initialValue = 0;
  let investedCapital = initialValue;

  for (let i = 0; i < dataDerived.length; i++) {
    totalIntrest += dataDerived[i].interest;
    investedCapital;

    dataDerived[i] = {
      year: dataDerived[i].year,
      valueEndOfYear: formatter.format(dataDerived[i].valueEndOfYear),
      interest: formatter.format(dataDerived[i].interest),
      totalIntrest: formatter.format(totalIntrest),
      investedCapital: formatter.format(
        investedCapital + dataDerived[i].annualInvestment
      ),
    };
  }

  return (
    <main>
      <UserInput handleInputValue={handleInputValue} data={dataEntries} />
      <section className="center">
        <table id="result">
          <thead>
            <TableRow tableData={cols} />
          </thead>
          <tbody>
            {dataDerived &&
              dataDerived.map((row, idx) => {
                // console.log(row);
                // console.log(Array.from(Object.values(row)));
                return (
                  <TableRow
                    key={idx}
                    tableData={Array.from(Object.values(row))}
                  />
                );
              })}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default App;
