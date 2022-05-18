import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { EventService } from "../event.service";

@Injectable({providedIn:'root'})
export class EventDetailsActivator implements CanActivate{
  constructor(private eventService:EventService, private router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const eventExists = !! this.eventService.getEvent(+route.params['id']);
    if (!eventExists) {
      this.router.navigateByUrl('/404')
    }
    return eventExists;
  }
}
