import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector:'event-thumbnail',
  template:`
    <div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">
    <h2>{{event?.name}}</h2>
    <div>{{event?.date}}</div>
    <div [class]="getStartTimeClass()" [ngSwitch]="event?.time">
      {{event?.time}}
      <span *ngSwitchCase="'8:00 am'">( Early Start )</span>
      <span *ngSwitchCase="'10:00 am'">( Late Start )</span>
      <span *ngSwitchDefault>( Normal Start )</span>
    </div>

    <div> \$ {{event?.price}}</div>
    <div *ngIf="event?.location">
      <span>Location: {{event?.location?.address}}</span>
      <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
    </div>
    <button class="btn btn-primary" (click)="haldleClickMe()">Click Me!</button>
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
@Input() event :any
@Output() eventClick = new EventEmitter()
datafromChild = 'from child'
haldleClickMe(){
  this.eventClick.emit(' Hello from child '+this.event.name)
}
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
