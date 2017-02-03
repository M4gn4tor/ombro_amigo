import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user = new User();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navCtrl = navCtrl
  }

  confirmLogin(){
    if(this.user.email == "douglas@hotmail.com" && this.user.password == "8492"){
      this.navCtrl.setRoot(TabsPage);
    }
    
  }

}

class User{
  name: string;
  email: string;
  password: string
}
