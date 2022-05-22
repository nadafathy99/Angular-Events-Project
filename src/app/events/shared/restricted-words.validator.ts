import {FormControl} from "@angular/forms";

export function restrictedWords (words:any[]){
  return (control:FormControl) =>{
  if (!words) return null;

  var invalidWords = words.filter(
    w=> {if (control.value.includes(w)) return w}
  )

  return invalidWords.length>0?{'restrictedWords':invalidWords.join(',')}:null;
}
}
