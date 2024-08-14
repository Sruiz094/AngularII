import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-signal-ejemplo3',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './signal-ejemplo3.component.html',
  styleUrl: './signal-ejemplo3.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SignalEjemplo3Component {
  nombre = signal('Sebastián');

  updateName(nombre: string) {
    this.nombre.set(nombre);
  }


}
