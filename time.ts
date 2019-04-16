import { Observable, timer, from, of, merge } from 'rxjs';
import { map } from 'rxjs/operators';

let five: Observable<string>  = from(timer(5000)).pipe(map(() => '5秒'));
let seven: Observable<string> = from(timer(7000)).pipe(map(() => '7秒'));

let stream: Observable<string> = merge(five, seven);

stream.subscribe(function (x) {
    console.log(x);
});
