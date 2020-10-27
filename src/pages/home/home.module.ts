import { IonicPageModule } from 'ionic-angular/module';
import { NgModule } from '@angular/core';
import { HomePage } from './home';

import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
 declarations: [HomePage],
 imports: [IonicPageModule.forChild(HomePage),IonicSelectableModule]
})
export class HomeModule{
}
