import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  weather : any;
  
  location: {
  city : string;
  country : string
}
  constructor(private WeatherService:WeatherService, private storage: Storage) {

  
  }

  ionViewWillEnter(){
    this.storage.get('location').then((val) => {

      if ( val != null ) {
        this.location = JSON.parse(val);

      } else {
        
        this.location = {
          city : 'sousse',
          country : 'TN'
        }
      }

      this.WeatherService.getWeather(this.location.city,this.location.country)
      .subscribe(data=>{
        this.weather=data;
        console.log(data);
      },err=>{
        console.log(err);
      });

    });
  }


  ngOnInit() {
  
  }



}
