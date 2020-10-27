import { Alergia } from './../../models/Alergia';
import { MedicamentosService } from './../../services/domain/medicamentos.services';
import { AlergiasService } from './../../services/domain/alergias.service';
import { DoencasService } from './../../services/domain/doencas.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Doenca } from '../../models/Doenca';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Medicamento } from '../../models/Medicamento';

class Port {
  public id: number;
  public name: string;


}
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

  //Doencas
  doencas: Doenca[];
  doenca: Doenca;

  //Alergias
  alergias: Alergia[];
  alergia: Alergia;

  //Doencas
  medicamentos: Medicamento[];
  medicamento: Medicamento;

  formGroup:FormGroup;

  //doecas: Doenca[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public doencaService: DoencasService,
              public alergiasService: AlergiasService,
              public medicamentosService: MedicamentosService) {

                /*
                this.ports = [
                  { id: 1, name: 'Tokai' },
                  { id: 2, name: 'Vladivostok' },
                  { id: 3, name: 'Navlakhi' }
                ];
                */

                this.formGroup = this.formBuilder.group({
                    nome:['Ariel',[Validators.required, Validators.maxLength(5), Validators.maxLength(120)]],
                    email:['ariel@gmail.com',[Validators.required, Validators.email]]

                  });
  }

ionViewDidLoad(){

//BUSCAR DOENCÇAS
  this.doencaService.findAll()
    .subscribe(response => {
      this.doencas = response;
      //this.doecas =  doecas;
      console.log(this.doencas)
  })

  //ALERGIAS
  this.alergiasService.findAll()
      .subscribe(response => {
        this.alergias = response;

        console.log(this.alergias)
  })

  //MEDICAMENTOS
  this.medicamentosService.findAll()
      .subscribe( response => {
              this.medicamentos = response;

        console.log(this.medicamentos)
      })

}

  cadastrarForm() {
    console.log("Enviou o formulario")
  }

  doencasChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('Doencas:', event.value);
  }

  alergiasChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('Alergias:', event.value);
  }

  medicamentosChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('Medicamentos:', event.value);
  }
}
