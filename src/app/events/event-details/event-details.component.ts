import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "../event.service";

@Component({
  templateUrl:'event-details.component.html',
  styles:[`
  .event-image {height:100px}
  `]
})
export class EventDetailsComponent implements OnInit{
  event:any
  constructor(private eventService:EventService, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
  }
}
