import { IEvent } from './shared/event.model';
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector:'event-thumbnail',
  template:`
    <div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">
    <h2>{{event?.name |uppercase}}</h2>
    <div>Date: {{event?.date |date}}</div>
    <div [class]="getStartTimeClass()" [ngSwitch]="event?.time"> Time:
      {{event?.time}}
      <span *ngSwitchCase="'8:00 am'">( Early Start )</span>
      <span *ngSwitchCase="'10:00 am'">( Late Start )</span>
      <span *ngSwitchDefault>( Normal Start )</span>
    </div>

    <div>Price: {{event?.price | currency}}</div>
    <div *ngIf="event?.location">
      <span>Location: {{event?.location?.address}}, {{event?.location?.city}}, {{event?.location?.country}}</span>
    </div>
  </div>
  `,
  styles:[`
  .green {color: #003300 !important}
  .bold {font-weight:bold}
  .thumbnail {min-height:250px}
  .well div {color: #bbb}
  `]
})
export class EventThumbnailComponent{
@Input() event !:IEvent
@Output() eventClick = new EventEmitter()
datafromChild = 'from child'

getStartTimeClass(){
  // const isEarlyStart = this.event?.time == '8:00 am'
  // return {green:isEarlyStart, bold: isEarlyStart}
  if (this.event?.time === '8:00 am'){
  // return 'green bold'
  return ['green', 'bold']
  }
  // return''
  return []
}
}
