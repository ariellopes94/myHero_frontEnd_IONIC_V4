import { TipoSaquinioEnum } from './../../models/Enuns/TipoSaquinio';
import { EstadoDeMoradiaEnum } from '../../models/Enuns/EstadoDeMoradia';
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

  //Estado De Moradia
  estadoDeMoradias:EstadoDeMoradiaEnum[];
  estadodeMoradia:EstadoDeMoradiaEnum;

  //Tipo Saquinio
  tipoSaquinios: TipoSaquinioEnum[];
  tipoSaquinio: TipoSaquinioEnum;

  //Gêneros
  genero:string;

  //DataNascimento
  dataNascimento:string;

  formGroup:FormGroup;



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

                  //CARREGAR ESTADOS
                  this.estadoDeMoradias = [
                    { nome: 'Acre', code: 'ACRE', id: '1' },
                    { nome: 'Alagoas', code: 'ALAGOAS', id: '2' },
                    { nome: 'Amapá', code: 'AMAPA', id: '3' },
                    { nome: 'Amazonas', code: 'AMAZONAS', id: '4' },
                    { nome: 'Bahia', code: 'BA', id: '5' },
                    { nome: 'Ceará', code: 'CEARA', id: '6' },
                    { nome: 'Espírito Santo', code: 'ESPIRITO_SANTOS', id: '7' },
                    { nome: 'Goiás', code: 'GOIAS', id: '8' },
                    { nome: 'Maranhão', code: 'MARANHAO', id: '9' },
                    { nome: 'Mato Grosso', code: 'MATO_GROSSO', id: '10' },
                    { nome: 'Mato Grosso do Sul', code: 'MATO_GROSSO_DO_SUL', id: '11' },
                    { nome: 'Minas Gerais', code: 'MINAS_GERAIS', id: '12' },
                    { nome: 'Pará', code: 'PARA', id: '13' },
                    { nome: 'Paraíba', code: 'PARAIBA', id: '14' },
                    { nome: 'Paraná', code: 'PARANA', id: '15' },
                    { nome: 'Pernambuco', code: 'PERNAMBUCO', id: '16' },
                    { nome: 'Piauí', code: 'PIAUI', id: '17' },
                    { nome: 'Rio de Janeiro', code: 'RIO_DE_JANEIRO', id: '18' },
                    { nome: 'Rio Grande do Norte', code: 'RIO_GRANDE_DO_NORTE', id: '19' },
                    { nome: 'Rio Grande do Sul', code: 'RIO_GRANDE_DO_SUL', id: '20' },
                    { nome: 'Rondônia', code: 'RONDÔNIA', id: '21' },
                    { nome: 'Roraima', code: 'RORAIMA', id: '22' },
                    { nome: 'Santa Catarina', code: 'SANTA_CATARINA', id: '23' },
                    { nome: 'São Paulo', code: 'SAO_PAULO', id: '24' },
                    { nome: 'Sergipe', code: 'SERGIPE', id: '25' },
                    { nome: 'Tocantins', code: 'TOCANTINS', id: '26' },
                    { nome: 'Distrito Federal', code: 'DISTRITO_FEDERAL', id: '27' }
                  ];

            //CARREGAR TIPO SAGUINIOS
            this.tipoSaquinios = [
              { nome: 'A+', value: 'A_POSITIVO', id: '1' },
              { nome: 'A-', value: 'A_NEGATIVO', id: '2'  },
              { nome: 'B+', value: 'B_POSITIVO', id: '3' },
              { nome: 'B-', value: 'B_NEGATIVO', id: '4' },
              { nome: 'AB+', value: 'AB_POSITIVO', id: '5' },
              { nome: 'AB-', value: 'AB_NEGATIVO', id: '6' },
              { nome: 'O+', value: 'O_POSITIVO', id: '7' },
              { nome: 'O-', value: 'O_NEGATIVO', id: '8' }
            ];

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

  estadoDeMoradiaChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('Medicamentos:', event.value);
  }

  tipoSaquinioChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('Tipo Saquinio:', event.value);
  }

  generoChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('Gênero:', event.value);
  }
}


