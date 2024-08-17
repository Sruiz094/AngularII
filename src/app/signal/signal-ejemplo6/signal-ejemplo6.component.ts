import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval, take } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-signal-ejemplo6',
  standalone: true,
  imports: [],
  templateUrl: './signal-ejemplo6.component.html',
  styleUrl: './signal-ejemplo6.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SignalEjemplo6Component {

  counter$ = interval(1000).pipe(take(20));
  counter = toSignal(this.counter$);

  counter2$ = interval(1000).pipe(take(20));
  counterWithIntialValue = toSignal(this.counter2$, {initialValue: 0})

  counter3$ = interval(1000).pipe(take(20));
  counterUpto5 = toSignal(this.counter3$);

}
