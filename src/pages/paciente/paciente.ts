import { Medicamento } from './../../models/Medicamento';
import { ContatosDeEmergencia } from './../../models/ContatosDeEmergencia';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Alergia } from './../../models/Alergia';
import { Doenca } from './../../models/Doenca';
import { PacienteService } from './../../services/domain/paciente.service';
import { PacienteDTO } from '../../models/DTO/Paciente.dto';

/**
 * Generated class for the PacientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paciente',
  templateUrl: 'paciente.html',
})
export class PacientePage {

  public fichaPaciente : PacienteDTO;

  public medicamentos: Medicamento[];
  public doencas : Doenca[];
  public alergias : Alergia[];
  public contatoDeEmergencias : ContatosDeEmergencia[];

  constructor(public navCtrl: NavController,
               public navParams: NavParams,
               public pacienteService: PacienteService) {
  }

  ionViewDidLoad() {
    this.pacienteService.fichaDoPaciente()
       .subscribe(reponse => {
         this.fichaPaciente = reponse;

        this.medicamentos = this.fichaPaciente.medicamentos;
        this.doencas = this.fichaPaciente.doencas;
        this.alergias = this.fichaPaciente.alergias;
        this.contatoDeEmergencias = this.fichaPaciente.contatosDeEmergencias;

       },
       error => {
          console.log(error);
       });
  }

}
