type DebounceFunction = (...args: any[]) => void;

export function debounce<T extends DebounceFunction>(func: T, wait: number): T {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function(this: any, ...args: any[]) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => func.apply(this, args), wait);
  } as T;
}