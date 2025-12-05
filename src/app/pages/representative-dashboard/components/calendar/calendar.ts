import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import frLocale from '@fullcalendar/core/locales/fr';
import {GetBookings} from '../../services/get_bookings/get-bookings';
import {Booking} from '../../services/get_bookings/booking.model';
import {EventClickArg} from '@fullcalendar/core';

@Component({
  selector: 'app-calendar',
  standalone: true,
  templateUrl: './calendar.html',
  styleUrl: './calendar.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Calendar {
  calendarOptions: any = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    locales: [frLocale],
    locale: 'fr',
    initialView: 'timeGridWeek',
    events: [],
    eventClick: this.handleEventClick.bind(this),
  };

  constructor(private getBookingsService: GetBookings) {}

  ngOnInit(): void {
    this.loadBookings();
  }

  loadBookings(): void {
    this.getBookingsService.getBookings().subscribe({
      next: (bookings: Booking[]) => {
        const events = bookings.map(booking => {
          const startDate = new Date(booking.appointment_at);
          const endDate = new Date(startDate.getTime() + booking.duration_minutes * 60000);

          return {
            id: booking.id,
            title: booking.swimmers.map(s => s.first_name).join(', '),
            start: startDate.toISOString(),
            end: endDate.toISOString(),
            extendedProps: {
              booking,
            },
          };
        });

        this.calendarOptions = {
          ...this.calendarOptions,
          events: events
        };
      },
      error: err => {
        console.error('Erreur lors du chargement des bookings:', err);
      }
    });
  }

  handleEventClick(clickInfo: EventClickArg) {
    const booking: Booking = clickInfo.event.extendedProps['booking'];
    alert(`Booking Details:\nSwimmers: ${booking.swimmers.map(s => s.first_name + ' ' + s.last_name).join(', ')}\nStatus: ${booking.status}`);
  }
}
