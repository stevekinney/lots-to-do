type Priority =
  | 'low'
  | 'medium'
  | 'high'
  | 'critical'
  | 'urgent'
  | 'major'
  | 'moderate'
  | 'minor';

type CompletedStatus = 'complete' | 'incomplete' | undefined;

type Status =
  | 'Pending'
  | 'Todo'
  | 'In progress'
  | 'In Discussion'
  | 'In Development'
  | 'Needs Confirmation'
  | 'Completed'
  | 'Upcoming'
  | 'Overdue'
  | 'Not started'
  | 'Active'
  | 'Priority'
  | 'Canceled'
  | 'Closed'
  | 'New'
  | 'On hold';

type Task = {
  id: string;
  title: string;
  priority: string;
  status: string;
  completed: boolean;
};

interface TaskWithDate extends Task {
  createdDate: Date;
  dueDate: Date;
}

type TaskState = {
  taskIds: string[];
  tasks: Record<string, Task>;
};

type TaskFilters = Omit<Partial<Task>, 'id' | 'completed'> & {
  completed?: string;
};

type FilterAction = {
  type: keyof TaskFilters;
  payload: string;
};
