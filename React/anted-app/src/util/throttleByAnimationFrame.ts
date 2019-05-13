import raf from 'raf';

export function throttleByAnimationFrame(fn: (...args: any[]) => void) {
    let requestID: number | null = null;

    let later = (...args: any[]) => {
        requestID = null;
        raf(fn(...args));
    }

    let throttle = (...args: any[]) => {
        if (requestID) {
            return;
        }
        requestID = raf(later(...args));
    }

    (throttle as any).cancle = () => raf.cancle(requestID);

    return throttle;
}

export function throttleByAnimationFrameDecorator() {
    return function(target: any, key: string, descriptor: any) {
      const fn = descriptor.value;
      let definingProperty = false;
      return {
        configurable: true,
        get() {
          if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
            return fn;
          }
  
          const boundFn = throttleByAnimationFrame(fn.bind(this));
          definingProperty = true;
          Object.defineProperty(this, key, {
            value: boundFn,
            configurable: true,
            writable: true,
          });
          definingProperty = false;
          return boundFn;
        },
      };
    };
  }