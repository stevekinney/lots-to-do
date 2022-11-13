import {
  decrementPage,
  getRange,
  hasLess,
  hasMore,
  incrementPage,
} from './paginate';

describe('hasMore', () => {
  it('should return true if there are more', () => {
    expect(hasMore([1, 2, 3], 2)).toBe(true);
  });

  it('should return false if there are not enough', () => {
    expect(hasMore([1, 2, 3], 4)).toBe(false);
  });
});

describe('hasLess', () => {
  it('should return true if there are more', () => {
    expect(hasLess([1, 2, 3], 2)).toBe(true);
  });

  it('should return false if there are not enough', () => {
    expect(hasLess([1, 2, 3], -1)).toBe(false);
  });
});

describe('getRange', () => {
  it('should get a slice of an array if it is in range', () => {
    expect(getRange([1, 2, 3, 4, 5], 2, 2)).toEqual([3, 4]);
  });

  it('should get the last slice if above the number of items', () => {
    expect(getRange([1, 2, 3, 4, 5], 7, 2)).toEqual([4, 5]);
  });

  it('should get the first slice if below the number of items', () => {
    expect(getRange([1, 2, 3, 4, 5], -42, 2)).toEqual([1, 2]);
  });
});

describe('incrementPage', () => {
  it('should increment if the next index is in range', () => {
    expect(incrementPage([1, 2, 3, 4, 5], 0, 2)).toEqual(2);
  });

  it('should should not increment if the next number is out of range', () => {
    expect(incrementPage([1, 2, 3, 4, 5], 7, 2)).toEqual(3);
  });
});

describe('decrementPage', () => {
  it('should increment if the next index is in range', () => {
    expect(decrementPage([1, 2, 3, 4, 5], 4, 2)).toEqual(2);
  });

  it('should should not increment if the next number is out of range', () => {
    expect(decrementPage([1, 2, 3, 4, 5], 0, 2)).toEqual(0);
  });
});
