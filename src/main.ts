import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { FullCalendarElement } from '@fullcalendar/web-component';

customElements.define('full-calendar', FullCalendarElement);

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
