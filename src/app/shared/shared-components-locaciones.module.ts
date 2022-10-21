import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllLocacionesComponent } from './all-locaciones/all-locaciones.component';



@NgModule({
  declarations: [AllLocacionesComponent],
  imports: [
    CommonModule
  ],
  exports: [AllLocacionesComponent]
})
export class SharedComponentsLocacionesModule { }
