import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Listcomponent } from './list-component/list-component'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Listcomponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('data-binding-app');

  pressed : number = 0;
  hide : boolean = false;

  //function to increment counter whenever pressed
  addToAmt(){
    this.pressed++;
  }

  //double clicked function
  onDblClick(){
    if(this.hide){
      this.hide = false;
    }else{
      this.hide = true;
    }
    
  }
}