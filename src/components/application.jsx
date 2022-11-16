import useTasks from '../lib/use-tasks';
import { initialFilters } from '../features/filters';
import Filters from './filters';
import Tasks from './tasks';
import useFilters, { filterTasks } from '../lib/filter-tasks';
import { useMemo, useTransition } from 'react';

const Application = () => {
  const [tasks] = useTasks();
  const [filterInputs, setFilterInputs] = useFilters(initialFilters);
  const [filters, setFilter] = useFilters(initialFilters);
  const [isPending, startTransition] = useTransition();

  const visibleTasks = useMemo(
    () => filterTasks(tasks, filters),
    [tasks, filters],
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilterInputs(name, value);
    startTransition(() => {
      setFilter(name, value);
    });
  };

  return (
    <main>
      {isPending && <p>Loading!</p>}
      <Filters filters={filterInputs} onChange={handleChange} />
      <Tasks tasks={visibleTasks} />
    </main>
  );
};

export default Application;
