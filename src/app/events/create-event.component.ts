import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/event.service';

@Component({
  templateUrl:'create-event.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left: 10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color:#999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class CreateEventComponent implements OnInit{
  newEvent!:any
  isDirty = true;
  constructor(private router:Router, private eventService:EventService){}
  ngOnInit(): void {
    this.newEvent={
      id: (Math.random()*100),
      sessions:[],
      name: 'angular',
      date: new Date ('1/2/2023'),
      time:'8:00 am',
      price:50,
      location :{address:'el raoda',
      city:'cairo',
      country:'egypt'
      },
      onlineUrl:"https://angular.io/",
      imageUrl:"https://angular.io/assets/images/logos/angular/logo-nav@2x.png"
    }
  }
  saveEvent(newEvent:any){
    this.eventService.saveEvent(newEvent);
    this.isDirty= false;
    console.log(newEvent);
    this.router.navigateByUrl('/events');
  }
  cancel(){
    this.router.navigateByUrl('/events');
  }
}
