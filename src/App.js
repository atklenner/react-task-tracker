import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Appointment", day: "02/05/2022", reminder: true },
    { id: 2, text: "Meeting", day: "02/06/2022", reminder: true },
    { id: 3, text: "Get Together", day: "02/07/2022", reminder: false },
  ]);
  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
