import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { EventService } from "./event.service";

@Injectable({providedIn:'root'})
export class EventListReslover implements Resolve<any>{
  constructor (private eventService:EventService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.eventService.getEvents()
  }

}
