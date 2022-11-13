import { useState } from 'react';

import data from '../api/tasks.json';

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>(data.slice(0, 10000));
  return [tasks, setTasks];
};

export default useTasks;
