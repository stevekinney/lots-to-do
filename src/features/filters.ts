import produce from 'immer';

export const priorities = [
  'low',
  'medium',
  'high',
  'critical',
  'urgent',
  'major',
  'moderate',
  'minor',
] as const;

export const statuses = [
  'Pending',
  'Todo',
  'In progress',
  'In Discussion',
  'In Development',
  'Needs Confirmation',
  'Completed',
  'Upcoming',
  'Overdue',
  'Not started',
  'Active',
  'Priority',
  'Canceled',
  'Closed',
  'New',
  'On hold',
] as const;

export const initialFilters: TaskFilters = {
  title: '',
  priority: undefined,
  status: undefined,
  completed: undefined,
};

export const filterReducer = (
  state: TaskFilters = initialFilters,
  action: FilterAction,
): TaskFilters =>
  produce(state, (filter) => {
    const { type, payload } = action;
    filter[type] = payload;
  });
