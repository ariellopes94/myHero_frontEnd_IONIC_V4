import { DoencasService } from './../../services/domain/doencas.service';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PacienteCadastroPage } from './paciente-cadastro';

@NgModule({
  declarations: [
    PacienteCadastroPage,
  ],
  imports: [
    IonicPageModule.forChild(PacienteCadastroPage),
  ],
  providers: [
    DoencasService
  ]
})
export class PacienteCadastroPageModule {}
