import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { EventService } from "./shared/event.service";

@Injectable({providedIn:'root'})
export class EventListReslover implements Resolve<any>{
  constructor (private eventService:EventService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.eventService.getEvents()
  }

}
