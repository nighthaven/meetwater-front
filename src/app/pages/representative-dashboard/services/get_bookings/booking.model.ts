import {Swimmer} from '../get-swimmers/swimmer.model';

export interface Booking {
  id: number;
  appointment_at: Date;
  duration_minutes: number;
  status: string;
  swimming_coach_name: string;
  swimmers: Swimmer[];
}
