import { ISession } from './../shared/event.model';
import { Component, Input, OnChanges } from "@angular/core";

@Component({
  selector:'session-list',
  templateUrl:'./session-list.component.html'
})
export class SessionListComponent implements OnChanges{
@Input() sessions?:ISession[]
@Input() filterBy='all'
filteredSessions?: ISession[]
  ngOnChanges(){
    if (this.sessions){
      this.filterSessions(this.filterBy)
    }
  }
  filterSessions(filterBy:string){
    if (filterBy==='all'){
      this.filteredSessions= this.sessions?.slice(0);
    } else{
      this.filteredSessions= this.sessions?.filter((session)=>session.level.toLowerCase()===filterBy);
    }
  }
}
