type Fn = (...params: any) => any;

function memoize(fn: Fn): Fn {
  const m = {};
  return function (...args) {
    if (!({ ...args } in m)) {
      m[{ ...args }] = fn(...args);
    }
    return m[{ ...args }];
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
