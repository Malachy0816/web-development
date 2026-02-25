import { Component } from '@angular/core';

@Component({
  selector: 'app-listcomponent',
  imports: [],
  templateUrl: './list-component.html',
  styleUrl: './list-component.css',
})
export class Listcomponent {
  //presidents array to allow us to populate it
  presidents:any[] = [{name: "Higgins", term:"2011-"},{name: "McAleese", term:"1997-2011"},{name: "Robinson", term:"1990-1997"},{name: "Hillery", term:"1976-1990"},{name: "O Dalaigh", term:"1974-1976"}];
  

}
