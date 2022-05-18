import { EventListReslover } from './events/event-list.resolver.service';
import { EventDetailsActivator } from './events/event-details/event-details-activator';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { Routes } from '@angular/router';
import { EventsListComponent } from "./events/events-list.component";
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './error/404.component';

export const appRoutes:Routes =[

  {path:'events',component:EventsListComponent,resolve:{events:EventListReslover}},
  {path:'events/new',component:CreateEventComponent,canDeactivate:['canDeactivateCreateEvent']},
  {path:'events/:id',component:EventDetailsComponent, canActivate: [EventDetailsActivator]},
  {path:'user', loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
  {path:'404', component:Error404Component},
  {path:'', redirectTo:'/events', pathMatch:'full'},
  {path:'**', redirectTo:'/events', pathMatch:'full'}
]
