import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';

/*
  Generated class for the DetailsHelp page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-details-help',
  templateUrl: 'details-help.html'
})
export class DetailsHelpPage {
  helper: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public actshCtrl: ActionSheetController, public alertCtrl: AlertController) {
    this.helper = this.navParams.get('helper');
  }

  agendConsulta(){
    if (this.helper.active == false){
      this.showMessage();
    } else {
      this.presentActionSheet();
    }
  }

  showMessage(){
    let alert = this.alertCtrl.create({
      title: 'Desculpe',
      subTitle: 'Mas o psicologo requisitado não está disponível no momento',
      buttons: ['OK']
    });
    alert.present();
  }

  presentActionSheet() {
    let actionSheet = this.actshCtrl.create({
      title: 'Agendamentos',
      buttons: [
        {
          text: 'Telefone',
          icon: 'call',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Endereço',
          icon: 'home',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
