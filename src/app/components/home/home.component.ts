import { Component, inject, signal } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResnestDataComponent } from './resnest-data/resnest-data.component';
import { ResnestDataService } from '../../services/resnest-data.service';

@Component({
  selector: 'app-home',
  imports: [DashboardComponent, ResnestDataComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  resnestDataService = inject(ResnestDataService);
  hasData = signal<boolean>(false);
  ngOnInit() {
    this.hasData.set(this.resnestDataService.data.rooms > 0);
  }

  hasDataEmitted(event: any) {
    this.hasData.set(event);
  }
}
