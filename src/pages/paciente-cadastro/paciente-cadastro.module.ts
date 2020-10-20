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
})
export class PacienteCadastroPageModule {}
