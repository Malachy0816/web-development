import { Injectable } from '@angular/core';
//import http client
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  //inject http client
  constructor(private httpClient:HttpClient){}

  //method to get student data from api
  GetStudentData():Observable<any>{
    return this.httpClient.get('https://api.jsonblob.com/019caf20-9c62-7e94-8b25-77e2c64fb70e');
  }

//method to get weather data from api
  getWeatherData():Observable<any>{
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=5b4ee8ecd353087f166bc194ae435564');
  }

}
