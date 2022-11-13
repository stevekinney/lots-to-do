import { memo } from 'react';
import clsx from 'clsx';
import { priorities, statuses } from '../features/filters';

const Filters = ({ filters, onSubmit, onChange, ...props }) => {
  return (
    <form
      {...props}
      className="flex items-center w-full gap-2 mb-8"
      onSubmit={(e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(e);
      }}
    >
      <FilterInput label="Title" value={filters.title} onChange={onChange} />
      <FilterSelect
        label="Completed"
        value={filters.completed}
        name="completed"
        onChange={onChange}
      >
        <option value={undefined} />
        <option value="complete">Complete</option>
        <option value="incomplete">Incomplete</option>
      </FilterSelect>
      <FilterSelect
        label="Priority"
        value={filters.priority}
        onChange={onChange}
      >
        <option value={undefined} />
        {priorities.map((priority) => (
          <option key={priority}>{priority}</option>
        ))}
      </FilterSelect>
      <FilterSelect label="Status" value={filters.status} onChange={onChange}>
        <option value={undefined} />
        {statuses.map((status) => (
          <option key={status}>{status}</option>
        ))}
      </FilterSelect>
    </form>
  );
};

const FilterInput = memo(({ label, ...props }) => {
  const id = `filter-${label.toLowerCase().replaceAll(' ', '-')}`;
  return (
    <article className="w-full">
      <label htmlFor={id}>{label}</label>
      <input
        name={props.name || label.toLowerCase()}
        id={id}
        placeholder={label}
        {...props}
        className={clsx('w-full', props.className)}
      />
    </article>
  );
});

const FilterSelect = memo(({ label, ...props }) => {
  const id = `filter-${label.toLowerCase()}`;
  return (
    <article>
      <label htmlFor={id}>{label}</label>
      <div className="flex items-center w-full place-content-center">
        <select {...props} id={id} />
      </div>
    </article>
  );
});

export default Filters;
