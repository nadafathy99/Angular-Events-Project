import { IUser } from './user.model';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class AuthService{
  currentUser!:IUser;
  login(userName:string, password:string){
    this.currentUser={
      id:1,
      userName:'nada99',
      firstName:'Nada',
      lastName:'Ahmed'
    }
  }

  isAuthenticated (){
    return !! this.currentUser;
  }

  updateCurrentUser(firstName:string, lastName: string){
    this.currentUser.firstName= firstName;
    this.currentUser.lastName= lastName;
  }
}
