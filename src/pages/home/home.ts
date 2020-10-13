import { AuthService } from './../../services/auth.service';
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

  constructor(public navCtrl: NavController,
     public menu: MenuController,
     public auth: AuthService) {
  }

  ionViewWillEnter(){
   this.menu.swipeEnable(false)
  }

  ionViewDidLeave(){
   this.menu.swipeEnable(true)
  }

  navigateToUsuarioLogado(){
    this.auth.authenticate(this.creds)
      .subscribe(response => {
        console.log(response.headers.get('Authorization'));

        this.navCtrl.setRoot('PacientePage');
      },
      error =>{});
    console.log(this.creds)

  }

  navigateToPacienteCreate(){
    this.navCtrl.setRoot('PacientePage');
  }

}
