import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/DTO/credenciais.dto';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds : CredenciaisDTO = {
      cpf:"",
      senha:""
  };

  constructor(public navCtrl: NavController, public menu: MenuController) {
  }

  ionViewWillEnter(){
   this.menu.swipeEnable(false)
  }

  ionViewDidLeave(){
   this.menu.swipeEnable(true)
  }

  navigateToUsuarioLogado(){
    console.log(this.creds)
    this.navCtrl.setRoot('PacientePage');
  }

  navigateToPacienteCreate(){
    this.navCtrl.setRoot('PacientePage');
  }

}
