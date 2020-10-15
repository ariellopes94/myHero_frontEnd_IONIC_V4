import { StorageService } from './../../services/storage.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PacienteService } from '../../services/domain/paciente.service';
import { PacienteProfileDTO } from '../../models/DTO/paciente_profile.dto';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  paciente : PacienteProfileDTO;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storage: StorageService,
              public pacienteService: PacienteService) {
  }

  ionViewDidLoad() {
   let localUser= this.storage.getLocalUser();
   if(localUser && localUser.cpf){
     //this.cpf = localUser.cpf;

     this.pacienteService.findByCpf(localUser.cpf)
          .subscribe(response => {
            this.paciente = response;
            //BuscarImage
          },
          error => {});
   }

  }

}
