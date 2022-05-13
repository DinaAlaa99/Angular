import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css'],
})
export class RateComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  @Input() rate: number = 0;
  @Input() readonly: any;

  rating() {
    this.newItemEvent.emit(String(this.rate));
  }
  constructor() {}

  ngOnInit(): void {}
}
