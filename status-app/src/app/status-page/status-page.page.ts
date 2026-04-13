import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonRadioGroup, IonItem, IonLabel, IonRadio, IonButton } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular'; // importing storage
@Component({
  selector: 'app-status-page',
  templateUrl: './status-page.page.html',
  styleUrls: ['./status-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonRadioGroup, IonItem, IonLabel, IonRadio, IonButton]
})
export class StatusPagePage implements OnInit {

  //empty string variable
  status:string = "";

  //inject argument into constructor
  constructor(private storage:Storage) { }

  //function that saves status to the variable
  async saveStatus(){
    await this.storage.create();
    await this.storage.set('myStatus', this.status);
  }

  //same function as last page so that it will check if a status is set
   async ionViewWillEnter(){
    await this.storage.create();
    this.status = await this.storage.get('myStatus')
  }

  ngOnInit() {
  }

}
