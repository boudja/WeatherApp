import { Component } from '@angular/core';
import { Storage }  from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  city : string;
  country : string;

  constructor(private storage : Storage, private navCtrl : NavController) {

    this.storage.get('location').then((val) => {
      if(val != null) {
        let location = JSON.parse(val);
        this.city = location.city;
        this.country = location.country;
      } else {
        this.city="Sousse";
        this.country="TN"
      }
    });
  
  }

  SaveForm() {
    let location = {
      city : this.city,
      country : this.country
    }
    this.storage.set('location', JSON.stringify(location));
    console.log(location);
    this.navCtrl.navigateForward("/tabs/tab1");
  }


  
  

  
}

