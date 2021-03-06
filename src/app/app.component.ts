import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage} from '../pages/login/login'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage: any = TabsPage;
  rootPage: any;
  login: boolean = true;

  constructor(platform: Platform) {
    if( this.login == true){
      this.rootPage = TabsPage
    } else {
      this.rootPage = LoginPage
    }

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
