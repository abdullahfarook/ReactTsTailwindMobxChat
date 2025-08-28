import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { reaction } from "mobx";
/**
 * Merges the tailwind clases (using twMerge). Conditionally removes false values
 * @param inputs The tailwind classes to merge
 * @returns className string to apply to an element or HOC
 */
export default function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Converts a date to a string by using the current locale.
 * @param date
 * @returns string representation of human readable date
 */
export function toHumanReadable(date: any): string {
    const now = new Date();
    const oneDay = 1000 * 60 * 60 * 24;
    date = new Date(date);
    // Normalize times (remove hours/minutes/seconds)
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const startOfDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    const diffDays = Math.floor(
        (startOfToday.getTime() - startOfDate.getTime()) / oneDay
    );
// today, yesterday, previous 7 days, previous month, previous year
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    // day
    if (diffDays > 1 && diffDays <= 7) return `Previous ${diffDays} days`;
    // week
    if (diffDays > 7 && diffDays <= 30) return `Previous ${Math.ceil(diffDays / 7)} weeks`;
    // month
    if (diffDays > 30 && diffDays <= 365) return `Previous ${Math.ceil(diffDays / 30)} months`;
    // year
    if (diffDays > 365) return `Previous ${Math.ceil(diffDays / 365)} years`;
    
    // Fallback: show date string (you can format with Intl if you want locale support)
    return date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}


/**
 * Converts a record to an array of key-value pairs.
 * @param record \<Record\<K, T\>\>
 * @returns 
 */
export function toArray<T,K extends string | number | symbol>(record: Record<K, T>): [K, T][] {
    return Object.entries(record) as [K, T][];
}
// Minimal Observable (Zen-like API)
export type Observer<T> = {
  next: (value: T) => void;
  error: (err: any) => void;
  complete: () => void;
};

type TSubscriber<T> = (observer: Observer<T>) => (() => void) | { unsubscribe: () => void } | void;

export class Observable<T> {
  private _subscriber: TSubscriber<T>;

  constructor(subscriber: TSubscriber<T>) {
    if (typeof subscriber !== 'function') {
      throw new TypeError('subscriber must be a function');
    }
    this._subscriber = subscriber;
  }

  subscribe(
    observerOrNext:
      | Partial<Observer<T>>
      | ((value: T) => void)
  ): { unsubscribe: () => void } {
    const observer = normalizeObserver<T>(observerOrNext);
    let closed = false;

    // Use a function type for cleanup, or undefined
    let cleanup: (() => void) | undefined;

    try {
      const maybeCleanup = this._subscriber({
        next: (v: T) => { if (!closed) observer.next(v); },
        error: (err: any) => {
          if (!closed) {
            closed = true;
            observer.error(err);
            runCleanup();
          }
        },
        complete: () => {
          if (!closed) {
            closed = true;
            observer.complete();
            runCleanup();
          }
        }
      });

      // subscriber may return a cleanup function or an object with unsubscribe()
      if (typeof maybeCleanup === 'function') {
        cleanup = maybeCleanup;
      } else if (maybeCleanup && typeof (maybeCleanup as any).unsubscribe === 'function') {
        cleanup = () => (maybeCleanup as any).unsubscribe();
      }
    } catch (err) {
      observer.error(err);
      runCleanup();
    }

    function runCleanup() {
      try {
        if (cleanup) cleanup();
      } catch (_) { /* swallow */ }
      cleanup = undefined;
    }

    return {
      unsubscribe() {
        if (!closed) {
          closed = true;
          runCleanup();
        }
      }
    };
  }

  // lightweight pipe support: obs.pipe(map(fn), filter(fn2), ...)
  pipe<R = T>(...operators: Array<(obs: Observable<any>) => Observable<any>>): Observable<R> {
    return operators.reduce(
      (prev: Observable<any>, op) => op(prev),
      this as Observable<any>
    ) as Observable<R>;
  }
}

// helper that accepts either observer object or single next function
function normalizeObserver<T>(
  observerOrNext: Partial<Observer<T>> | ((value: T) => void)
): Observer<T> {
  if (typeof observerOrNext === 'function') {
    return {
      next: observerOrNext,
      error: (e: any) => { console.error(e); },
      complete: () => {}
    };
  }
  return {
    next: (observerOrNext && observerOrNext.next) ? observerOrNext.next.bind(observerOrNext) : () => {},
    error: (observerOrNext && observerOrNext.error) ? observerOrNext.error.bind(observerOrNext) : (e: any) => { console.error(e); },
    complete: (observerOrNext && observerOrNext.complete) ? observerOrNext.complete.bind(observerOrNext) : () => {}
  };
}

// accessToken$ = toSubscribable(this, s => s.accessToken);
// accessToken$.subscribe(this, (value: string | null) => {
//   console.log('accessToken changed', value);
// });
export function toSubscribable<T extends object, R>(
  store: T,
  selectorOrKey: ((state: T) => R) | keyof T
) {
  const selector: (state: T) => R =
    typeof selectorOrKey === 'function'
      ? (selectorOrKey as (s: T) => R)
      : ((s: T) => (s as any)[selectorOrKey as keyof T] as R);

  return {
    subscribe(
      thisArgOrCallback: any,
      maybeCallback?: (value: R) => void
    ) {
      const callback: (value: R) => void =
        typeof thisArgOrCallback === 'function'
          ? thisArgOrCallback
          : (maybeCallback as (value: R) => void);

      const boundCallback =
        typeof thisArgOrCallback === 'function'
          ? callback
          : callback?.bind(thisArgOrCallback);

      // fire immediately with current value
      boundCallback(selector(store));

      // listen for future changes
      const disposer = reaction(() => selector(store), (value) => {
        boundCallback(value);
      });

      // return unsubscribe handle
      return { unsubscribe: disposer };
    },
  };
}
