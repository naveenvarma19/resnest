import {
  Component,
  computed,
  EventEmitter,
  inject,
  Output,
  output,
  signal,
} from '@angular/core';
import { ResnestDataService } from '../../../services/resnest-data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resnest-data',
  imports: [FormsModule],
  templateUrl: './resnest-data.component.html',
  styleUrl: './resnest-data.component.scss',
})
export class ResnestDataComponent {
  resNestDataService = inject(ResnestDataService);
  @Output() hasData = new EventEmitter<number>();
  rooms = signal(0);

  updateRooms() {
    this.resNestDataService.updateRooms(this.rooms());
    this.hasData.emit(this.rooms());
  }
}
