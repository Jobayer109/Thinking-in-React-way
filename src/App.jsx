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
      <div>
        <ul>
          {task.tags.map((tag) => (
            <li key={tag.id}>
              <small>{tag.icon}</small> - <p>{tag.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="horizontal__line"></div>
      <div>
        <p>People who are linked:</p>
      </div>
    </div>
  );
}

export default App;
