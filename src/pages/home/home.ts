import { Component } from '@angular/core';

import {LoadingController, NavController } from 'ionic-angular';
import { LoadingData} from '../../providers/loading-data'

import {DetailsHelpPage} from '../details-help/details-help'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  helpers: any;
  

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public ldnData: LoadingData) {
    this.presentLoading();
    this.ldnData.getData().subscribe(data => this.helpers = data)
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Carregando",
      duration: 1000 
    });
    loader.present();
  }

  itemSelected(helper: any) {
    let data = {
      helper : helper
    }
    console.log(helper);
    this.navCtrl.push(DetailsHelpPage, data);
  }
}
