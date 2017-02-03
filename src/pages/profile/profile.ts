import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  user = { name : "Douglas Silva"}
  constructor(public navCtrl: NavController) {
    
  }

}
