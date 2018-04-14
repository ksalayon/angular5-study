import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
 import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

export function throttle ({time = 2000, hasLog = false} : {time?: number, hasLog?: boolean}) {
  return function(target, name, descriptor) {
    let fn = descriptor.value;
    
    var newFn;

    if(hasLog) {
      newFn  = function<T>(...args:T[]): Observable<T[]> {
        const fnSubject = new BehaviorSubject([]);
        const date = new Date();
        setTimeout(() => {
          console.log('delay is: ', time);
          console.log('delayed for ', diff_seconds(new Date(), date) + ' seconds');
          fn.apply(this, args).subscribe((o) => {
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


function diff_seconds(dt2, dt1)
{
  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  // console.log('actual diff: ', diff);
  return diff;
  // diff /= (60 * 60);
  // return Math.abs(Math.round(diff));

}
