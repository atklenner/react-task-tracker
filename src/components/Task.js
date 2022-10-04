import { FaTimes } from "react-icons/fa";

export default function Task({ task, onDelete }) {
  return (
    <div className="task">
      <h3 onClick={() => onDelete(task.id)}>
        {task.text}
        <FaTimes style={{ color: "red", cursor: "pointer" }} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
}
