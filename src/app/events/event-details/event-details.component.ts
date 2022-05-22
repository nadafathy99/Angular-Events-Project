import { IEvent, ISession } from './../shared/event.model';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "../shared/event.service";

@Component({
  templateUrl:'event-details.component.html',
  styles:[`
  .event-image {height:100px}
  a{cursor:pointer}
  `]
})
export class EventDetailsComponent implements OnInit{
  event!:IEvent |undefined;
  addMode= false;
  constructor(private eventService:EventService, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
  }
  addSession(){
    this.addMode=true;
  }
  saveSession(session:ISession){
    if (this.event){
    this.event?.sessions.push(session);
    this.eventService.updateEvent(this.event)
    this.addMode=false;
    }
  }
  viewSessions(){
    this.addMode= false;
  }
}

