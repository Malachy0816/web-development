import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import button types
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-connacht',
  templateUrl: './connacht.page.html',
  styleUrls: ['./connacht.page.scss'],
  standalone: true,
  //import buttons into component
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButtons]
})
export class ConnachtPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
