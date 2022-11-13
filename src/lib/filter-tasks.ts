import { useCallback, useState } from 'react';
import { initialFilters } from '../features/filters';
import { block, sleep } from './sleep';

const includes = (key: 'title', task: Task, filter: TaskFilters) => {
  const filterValue = filter[key];
  if (!filterValue) return true;
  return new RegExp(filterValue.toLowerCase()).test(task[key].toLowerCase());
};

const matchesCompleted = (task: Task, status?: string) => {
  if (!status) return true;
  if (status === 'complete' && task.completed === true) return true;
  if (status === 'incomplete' && task.completed === false) return true;
  return false;
};

const equals = <T>(task: T, filter: T): boolean => {
  if (!filter) return true;
  return task === filter;
};

const filterTask = (task: Task, filter: TaskFilters): boolean => {
  if (!includes('title', task, filter)) return false;
  if (!matchesCompleted(task, filter.completed)) return false;
  if (!equals(task.priority, filter.priority)) return false;
  if (!equals(task.status, filter.status)) return false;

  return true;
};

export function filterTasks(
  tasks: Task[],
  filter: TaskFilters,
): string[] | Task[] {
  return tasks.filter((task) => filterTask(task, filter));
}

const useFilters = () => {
  const [filters, set] = useState(initialFilters);
  const setFilters = useCallback(
    (name: string, value: string) => {
      set({
        ...filters,
        [name]: value,
      });
    },
    [filters],
  );
  return [filters, setFilters] as const;
};

export default useFilters;
