import { MedicamentosService } from './../../services/domain/medicamentos.services';
import { AlergiasService } from './../../services/domain/alergias.service';
import { DoencasService } from './../../services/domain/doencas.service';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PacienteCadastroPage } from './paciente-cadastro';

import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  declarations: [
    PacienteCadastroPage,
  ],
  imports: [
    IonicPageModule.forChild(PacienteCadastroPage),
    IonicSelectableModule
  ],
  providers: [
    DoencasService,
    AlergiasService,
    MedicamentosService
  ]
})
export class PacienteCadastroPageModule {}
