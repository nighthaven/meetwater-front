import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import frLocale from '@fullcalendar/core/locales/fr';

@Component({
  selector: 'app-calendar',
  imports: [],
  standalone: true,
  templateUrl: './calendar.html',
  styleUrl: './calendar.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Calendar {
  calendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    locales: [frLocale],
    locale: 'fr',
    initialView: 'timeGridWeek',
    events: [
      { title: 'Test', start: '2025-01-15T10:00:00' }
    ]
  };
}
