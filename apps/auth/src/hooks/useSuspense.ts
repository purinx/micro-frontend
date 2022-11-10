export const useSuspense = <T extends any[], U>(
  f: (...p: T) => Promise<U>,
  ref: {
    result?: U;
    error?: unknown;
    suspender?: Promise<void>;
  },
  ...params: T
) => {
  if (!ref.suspender) {
    ref.suspender = f(...params)
      .then((result) => {
        console.log(result);
        ref.result = result;
      })
      .catch((e) => {
        ref.error = e;
      });
  }
  if (ref.error) {
    console.error(ref.error);
    throw ref.error;
  }
  if (ref.result) {
    return ref.result;
  }
  throw ref.suspender;
};
