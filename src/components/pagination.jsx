import { memo, useMemo, useState } from 'react';
import {
  decrementPage,
  getRange,
  hasLess,
  hasMore,
  incrementPage,
} from '../lib/paginate';

const Pagination = ({ items, perPage = 50, render }) => {
  const [index, setIndex] = useState(0);

  const visible = useMemo(() => {
    return getRange(items, index, perPage);
  }, [items, index, perPage]);

  return (
    <section>
      <header className="flex items-center py-4 place-content-between">
        <p>
          Showing {index + 1} throught {Math.min(index + perPage, items.length)}{' '}
          of {items.length}.
        </p>
        <div className="flex gap-2 ">
          <button
            className="small"
            onClick={() =>
              setIndex((index) => decrementPage(items, index, perPage))
            }
            disabled={!hasLess(items, index, perPage)}
          >
            Previous
          </button>
          <button
            className="small"
            onClick={() =>
              setIndex((index) => incrementPage(items, index, perPage))
            }
            disabled={!hasMore(items, index, perPage)}
          >
            Next
          </button>
        </div>
      </header>
      <div>{render(visible)}</div>
    </section>
  );
};

export default memo(Pagination);
