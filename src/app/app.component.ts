import { Component } from '@angular/core';

@Component({
  selector: 'nada-root',
  template: `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'Fundamentals-Start';
}
