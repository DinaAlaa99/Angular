import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RateComponent } from './rate/rate.component';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';


@NgModule({
  declarations: [RateComponent],
  imports: [CommonModule, FormsModule,RatingModule],
  exports:[RateComponent]
})
export class SharedModule {}
