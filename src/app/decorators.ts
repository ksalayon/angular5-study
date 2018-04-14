import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
 import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export function throttle (time: number) {
  return function(target, name, descriptor) {
    let fn = descriptor.value;

    let newFn  = function(...args:any[]) {
      var date = new Date();
      return fn.apply(this, args).delay(time);
    };

    descriptor.value = newFn;
    return descriptor;

  }
}


function diff_hours(dt2, dt1)
{

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  // diff /= (60 * 60);
  return Math.abs(Math.round(diff));

}
