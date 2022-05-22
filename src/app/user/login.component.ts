import { Router } from '@angular/router';
import { Component } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
  templateUrl:'./login.component.html',
  styles: [`
    em { float:right; color:#E05C65; padding-left:10px; }
  `]
})
export class LoginComponent{
  userName!:string;
  password!:string;
  mouseOverLogin = false;
  constructor(private authService:AuthService, private router:Router){}
  login(formValues:{userName:string, password:string}){
    this.authService.login(formValues.userName, formValues.password);
    this.router.navigateByUrl('/events');
  }
  cancel(){
    this.router.navigateByUrl('/events');
  }
}
