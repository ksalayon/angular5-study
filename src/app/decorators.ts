import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
 import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

export function throttle ({time = 1000, hasLog = false} : {time?: number, hasLog?: boolean} = {}) {
  return function(target, name, descriptor) {
    let fn = descriptor.value;

    var newFn;

    if(hasLog) {
      newFn  = function<T>(...args:T[]): Observable<T[]> {
        const fnSubject = new BehaviorSubject([]);
        const date = new Date();
        setTimeout(() => {

          fn.apply(this, args).subscribe((o) => {
            console.log('delayed for ', diff_seconds(new Date(), date) + ' seconds');
            fnSubject.next(o);
          })
        }, time);

        return fnSubject.asObservable();

      };
    } else {
      newFn  = function(...args:any[]) {
        return fn.apply(this, args).delay(time);
      };
    }

    descriptor.value = newFn;
    return descriptor;

  }
}

export function cache(target, name, descriptor) {
  var fn = descriptor.value;
  let cachedResponse:any;
  const newFn = function(...args: any[]) {

    let cached = new BehaviorSubject([]);
    if(!cachedResponse) {

      fn.apply(this, args).subscribe((val, e) => {
        cachedResponse = val;
        cached.next(val);
      })

    }
    return cached.asObservable();
  }

  descriptor.value = newFn;
  return descriptor;
}

function diff_seconds(dt2, dt1)
{
  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  // console.log('actual diff: ', diff);
  return diff;
  // diff /= (60 * 60);
  // return Math.abs(Math.round(diff));

}
