import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
//import the router link to use in html page
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  //import router link into component
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, RouterLink],
})
export class HomePage {
  constructor() {}
}
