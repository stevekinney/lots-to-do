import { memo } from 'react';

const Task = ({ task, toggleTask }) => {
  return (
    <tr>
      <td>{task.id}</td>
      <td>{task.title}</td>
      <td>{task.priority}</td>
      <td>{task.status}</td>
      <td>
        <label className="hidden" htmlFor={`task-${task.id}-completed`}>
          Completed?
        </label>
        <input
          type="checkbox"
          id={`task-${task.id}-completed`}
          checked={task.completed}
          onChange={(e) => toggleTask(task.id)}
        />
      </td>
    </tr>
  );
};

export default memo(Task);
