import { ISession } from './../shared/event.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { restrictedWords } from '../shared/restricted-words.validator';

@Component({
  selector:'create-session',
  templateUrl:'./create-session.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left: 10px;}
  `]
})
export class CreateSessionComponent implements OnInit{
  @Output() newSession= new EventEmitter()
  @Output() cancelAddSession = new EventEmitter()
  newSessionForm !: FormGroup
  name !: FormControl
  presenter !: FormControl
  duration !: FormControl
  level !: FormControl
  abstract !: FormControl

  ngOnInit(): void {
    this.name = new FormControl('', [Validators.required])
    this.presenter = new FormControl('', [Validators.required])
    this.duration = new FormControl('', [Validators.required])
    this.level = new FormControl('', [Validators.required])
    this.abstract = new FormControl('', [Validators.required,Validators.maxLength(200),restrictedWords(['foo','fuck'])])
    
    this.newSessionForm= new FormGroup({
      name:this.name,
      presenter:this.presenter,
      duration:this.duration,
      level:this.level,
      abstract:this.abstract,
    })
  }

  save(formValues:any){
    const session :ISession={
      id:(Math.floor(Math.random()*100)),
      voters:[],
      name:formValues.name,
      presenter:formValues.presenter,
      duration:+formValues.duration,
      level:formValues.level,
      abstract:formValues.abstract,
    }
    this.newSession.emit(session);
  }
  cancel(){
    this.cancelAddSession.emit()
  }
}
