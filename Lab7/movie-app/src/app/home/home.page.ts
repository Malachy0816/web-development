import { Component } from '@angular/core';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonCardHeader, IonCardSubtitle, IonCardTitle, IonCard, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  movies:any[]=[];
  constructor(private service:MovieService) {}
//runs when the page will be displayed
  ionViewWillEnter(){
    //subscribe to the movie service 
    this.service.getAvengerMovieData().subscribe(
      (data)=>{
        this.movies = data.Search;
        console.log(this.movies);
      }
    );
  }
}
