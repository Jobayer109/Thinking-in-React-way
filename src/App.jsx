import "./App.css";
import task from "./components/data";

const currentDay = (dateStr) => {
  const day = new Date(dateStr).getDay();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysOfWeek[day];
};

const dateFormat = (dateStr) => {
  const date = new Date(dateStr);
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
};

function App() {
  return (
    <div>
      <div>
        <h3>
          {currentDay(task.createdAt)}, {dateFormat(task.createdAt)}
        </h3>
        <p>{task.subtitle}</p>
      </div>
    </div>
  );
}

export default App;
