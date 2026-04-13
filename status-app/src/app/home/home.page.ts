import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonButton, RouterLink],
})
export class HomePage {
  status:string = "";
  //add argument into constructor
  constructor(private storage:Storage) {}

  //function that will run everytime the page is opened which creates a storage object
  async ionViewWillEnter(){
    await this.storage.create();
    this.status = await this.storage.get('myStatus')
  }
}
