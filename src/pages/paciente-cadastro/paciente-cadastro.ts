import { DoencasService } from './../../services/domain/doencas.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Doenca } from '../../models/Doenca';

/**
 * Generated class for the PacienteCadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paciente-cadastro',
  templateUrl: 'paciente-cadastro.html',
})
export class PacienteCadastroPage {

  formGroup:FormGroup;

  doecas: Doenca[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public doencaService: DoencasService) {

                this.formGroup = this.formBuilder.group({
                    nome:['Ariel',[Validators.required, Validators.maxLength(5), Validators.maxLength(120)]],
                    email:['ariel@gmail.com',[Validators.required, Validators.email]]

                  });
  }

ionViewDidLoad(){

  /*
  this.doencaService.findAll()
    .subscribe(response => {
      this.doecas = response;

      console.log(this.doecas)
      this.formGroup.controls.doencasId.setValue(this.doecas[0].id)
    })
    */
}

  cadastrarForm() {
    console.log("Enviou o formulario")
  }
}
