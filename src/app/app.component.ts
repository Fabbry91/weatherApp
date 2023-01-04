import { Component, OnInit } from '@angular/core';
import { LOC, Period, Place, Response } from './models/weather.models';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  weatheData: Response;
  today = new Date();
  weather: Period;
  place: Place;
  strTime = '';

  constructor(private weatherServ: WeatherService) {

  }

  async ngOnInit() {
    this.getPosition()
    this.getHoraImg(this.today);
  }


  getPosition() {
    navigator.geolocation.getCurrentPosition((position) => {

      let pos: LOC = {
        lat: position.coords.latitude,
        long: position.coords.longitude
      }

      this.weatherServ.getWeatherData(pos).subscribe({
        next: (resp) => {
          this.weatheData = resp.response[0];
          this.weather = resp.response[0].periods[0];
          this.place = resp.response[0].place;
        }
      })

    }, (err) => {
      console.log('localizacion desactivada')
    }
    )
  }

  getHoraImg(date: any) {

    var hours = date.getHours();

    if (hours < 8) {
      this.strTime = "nigth";
    }
    if (hours > 7 && hours < 12) {
      this.strTime = "day";
    }
    if (hours > 11 && hours < 18) {
      this.strTime = "day";
    }
    if (hours > 17 && hours < 24) {
      this.strTime = "nigth";
    }
  }
}


