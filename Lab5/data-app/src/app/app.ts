import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import custom service
import { DataService } from './Services/data-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
   constructor(private dataService:DataService){}

   //create arrays to store data
   students:any[]=[];
   weatherElement:any[]=[];
   ngOnInit(): void {
    //method to get data and return to array
     this.dataService.GetStudentData().subscribe(
     (data)=>{
      this.students = data.students;
     }
     );
     //method to get data and return into array
     this.dataService.getWeatherData().subscribe(
      (data)=>{
        //assign array from api
        this.weatherElement = data.weather;
      }
     );
  }
}


