import { ActivatedRoute } from '@angular/router';
import { ToastrService } from './../common/toastr.service';
import { Component, OnInit } from "@angular/core";
import { EventService } from "./event.service";

@Component({
  template: `
  <div>
  <h1>Upcoming Angular Events</h1>
  <hr>
  <div class="row">
    <div *ngFor="let event of events" class="col-md-6">
  <event-thumbnail #thumbnail  [event]="event" (eventClick)="handleEvent($event)" (click)="handleThumbnailClick(event.name)"></event-thumbnail>
    </div>
  </div>
  <!-- <h3>{{thumbnail.datafromChild}}</h3> -->
  </div>
  `
})
export class EventsListComponent implements OnInit{
  events!:any
  constructor(private eventService:EventService, private toastrService:ToastrService, private route:ActivatedRoute ){}
  handleEvent(data:Event){
    console.log(`recieved:`+ data);
  }
  ngOnInit(): void {
    // this.eventService.getEvents().subscribe((events)=>this.events=events)
    this.events= this.route.snapshot.data['events']
  }
  handleThumbnailClick(name:string){
    this.toastrService.success(name)
  }
}
