import React, { useState,useEffect } from "react";
import Charts from "./Contents/Charts";
import Gauge from "./Contents/Gauge";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import "./Home.css";
import Ads from "./Ads";
import axios from "axios";

const Home = (props) => {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null); 

  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((response) => {
        setYears(response.data);
        // Update selectedYear after fetching data and setting currentYear
        setSelectedYear(response.data.length > 0 ? response.data[response.data.length - 1].year : null);
      })
      .catch((error) => console.log("Could not fetch data from Database", error));
  }, []);
  const [paymentStatus] = useState(true);
  const currentYear = years.length > 0 ? years[years.length - 1].year : null;
  const reversedYear = years.length > 0 ? years.map((item) => item.year).reverse() : [];


  console.log("Selected Year ", selectedYear);
  const selectedYearValues = years.find((item) => item.year === parseInt(selectedYear))?.values || [];
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };


  // to the values of last arrays last values, representing previous month units consumed
  const thisYearValues =
    years.find((item) => item.year === currentYear)?.values || [];
  const unitsConsumedLastMon = thisYearValues[thisYearValues.length - 1];

  const nameOfMonth =
    thisYearValues.length === 1
      ? "Jan"
      : thisYearValues.length === 2
      ? "Feb"
      : thisYearValues.length === 3
      ? "Mar"
      : thisYearValues.length === 4
      ? "Apr"
      : thisYearValues.length === 5
      ? "May"
      : thisYearValues.length === 6
      ? "Jun"
      : thisYearValues.length === 7
      ? "Jul"
      : thisYearValues.length === 8
      ? "Aug"
      : thisYearValues.length === 9
      ? "Sep"
      : thisYearValues.length === 10
      ? "Oct"
      : thisYearValues.length === 11
      ? "Nov"
      : "Dec";


  // to calculate total units in each year
  let sumForAvg = 0;
  const unitsPerYear = years.map((yearData) => {
    const sum = yearData.values.reduce(
      (accumulator, value) => accumulator + value,
      0
    );
    sumForAvg += sum;
    return sum;
  });
  const avgUnitsPerMonth = Math.round(sumForAvg / (years.length * 12));

  const paymentHandler = () => {
    alert("This option is no available right now");
  };
  return (
    <React.Fragment>
    <div className="home">
      <div className="applyLink">
        <div>
          <i className="fa-solid fa-circle-info fa-2xl"></i>
          &nbsp;{" "}
        </div>
        <div className="application-note">Application for new Smart Meter</div>
        <NavLink to="/new">
          <button className="smart-meter-button">Apply</button>{" "}
        </NavLink>
      </div>

      {props.loggedIn ? (
        <React.Fragment>
          <div className="yearly-chart">
            <Charts
              categories={years.map((item) => item.year)}
              data={unitsPerYear}
            />
          </div>
          {/* monthly chart */}
          <div className="monthly-chart">
            <div className="year-container">
              Select the year:&nbsp;
              <select name="" id="" onChange={handleYearChange}>
                {reversedYear.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <hr />
            <Charts categories={month} data={selectedYearValues} /> {/*code to be checked*/}
          </div>

          <div className="avgUnitsPerMon">
            <Gauge value={avgUnitsPerMonth} />
            <h3>{avgUnitsPerMonth} units</h3>
            <hr />
            <h2>Average Units per Month </h2>
          </div>
          
          <div className="lastMonth">
            <h2>Units Consumed Last Month</h2>
            <hr />
            <h1>
              <i className="fa fa-calendar" aria-hidden="true"></i>{" "}
              {nameOfMonth}
            </h1>
            <h1>
              {unitsConsumedLastMon} units -{" "}
              {Math.round(unitsConsumedLastMon * 8.2)} INR
            </h1>
            <hr />
            <div className="paymentButton">
              <button className="view-bill">VIEW BILL</button>
              {paymentStatus && (
                <button onClick={paymentHandler} className="Pay">
                  PAY BILL
                </button>
              )}
            </div>
          </div>
        </React.Fragment>
      ): //if the user is not logged in render ads page
     ""}
    </div>
    {!props.loggedIn && <Ads/>}
    </React.Fragment>
  );
};

export default Home;
