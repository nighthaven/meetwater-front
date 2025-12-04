import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarSwimmers} from './components/sidebar-swimmers/sidebar-swimmers';
import { Calendar } from './components/calendar/calendar'


@Component({
  selector: 'app-representative-dashboard',
  imports: [CommonModule, SidebarSwimmers, Calendar],
  templateUrl: './representative-dashboard.html',
  styleUrl: './representative-dashboard.scss',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RepresentativeDashboard {

}
