import { Calendar } from "calendar";
import { useState } from "react";
import Day from "./Day";

export default function Agenda() {
  //   const cal = ;
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [cal, setCal] = useState(new Calendar(1).monthDates(year, month));
  const textMonth = [
    "Janvier",
    "Fevier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre",
  ];
  console.log(cal);
  //   cal.monthDates(year, month);
  return (
    <div id="Agenda">
      <div className="header">
        <h2>{textMonth[month]}</h2>
      </div>
      <div className="calendar">
        <div className="week name">
          <div className="day">Lundi</div>
          <div className="day">Mardi</div>
          <div className="day">Mercredi</div>
          <div className="day">Jeudi</div>
          <div className="day">Vendredi</div>
          <div className="day">Samedi</div>
          <div className="day">Dimanche</div>
        </div>
        {cal.map((week, i) => {
          return (
            <div className="week" key={i}>
              {week.map((day, u) => {
                return <Day day={day} key={`${i}-${u}`} />;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
