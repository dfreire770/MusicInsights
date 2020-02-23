import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UIService {

  toggled=false;

  constructor() { }

  toggleSideNav(): void {
    let element = document.getElementById('wrapper'); 
    if(!this.toggled){
      element.className = "toggled";
      this.toggled = true;
    }
    else{
      element.className = "untoggle";
      this.toggled = false;  
    }    
  }
}
