import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LOC, WeatherData } from '../models/weather.models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: LOC): Observable<WeatherData> {

    let param = (cityName.city) ? cityName.city : `${cityName.lat},${cityName.long}`;
    
    return this.http.get<WeatherData>(environment.weatherUrl + `${param}`, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostValue)
        .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue)
    })
  }
}
