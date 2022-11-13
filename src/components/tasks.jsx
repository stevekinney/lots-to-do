import Task from './task';

const Tasks = ({ tasks, toggleTask }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key={task.id} task={task} toggleTask={toggleTask} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
