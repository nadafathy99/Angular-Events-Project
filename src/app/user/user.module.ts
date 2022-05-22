import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {userRoutes} from './routes'
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations:[
    ProfileComponent,
    LoginComponent
  ],
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes)
  ],
  exports:[]
})
export class UserModule{

}
