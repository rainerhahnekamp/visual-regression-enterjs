import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Holiday } from '../holiday';

@Component({
  selector: 'eternal-holiday-card',
  templateUrl: './holiday-card.component.html',
  styleUrls: ['./holiday-card.component.scss']
})
export class HolidayCardComponent {
  @Input() holiday: Holiday | undefined;
  @Output() brochureClick = new EventEmitter();
}
