import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder) {

                this.formGroup = this.formBuilder.group({
                    nome:['Ariel',[Validators.required, Validators.maxLength(5), Validators.maxLength(120)]],
                    email:['ariel@gmail.com',[Validators.required, Validators.email]]

                  });
  }

  cadastrarForm() {
    console.log("Enviou o formulario")
  }
}
