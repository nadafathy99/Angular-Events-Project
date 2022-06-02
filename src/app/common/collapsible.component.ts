import { Component, Input } from "@angular/core";

@Component({
  selector:'collapsible',
  template:`
  <div (click)="toggleContent()" class="well pointable">
  <ng-content select="[title]"></ng-content>
  <ng-content select=[body] *ngIf="visible"></ng-content>
  </div>
  `
})
export class CollapsibleComponent{
  visible = false ;

  toggleContent(){
    this.visible= ! this.visible;
  }
}
