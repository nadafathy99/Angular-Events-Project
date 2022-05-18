import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {userRoutes} from './routes'
import { ProfileComponent } from './profile.component';
@NgModule({
  declarations:[
    ProfileComponent
  ],
  imports:[
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  exports:[]
})
export class UserModule{

}
