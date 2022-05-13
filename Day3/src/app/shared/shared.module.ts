import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RateComponent } from './rate/rate.component';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [RateComponent, CalendarComponent],
  imports: [CommonModule, FormsModule, RatingModule, CalendarModule],
  exports: [RateComponent,CalendarComponent],
})
export class SharedModule {}
