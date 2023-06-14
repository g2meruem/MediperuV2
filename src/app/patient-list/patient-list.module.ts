import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormLayoutDemoModule } from '../demo/components/uikit/formlayout/formlayoutdemo.module';
import { TableDemoModule } from '../demo/components/uikit/table/tabledemo.module';
import { PatientListComponent } from './patient-list.component';
import { PatientService } from '../patient.service';

@NgModule({
  declarations: [
    PatientListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormLayoutDemoModule,
    TableDemoModule,
  ],
  providers: [PatientService] // Agrega el servicio a la lista de providers
})
export class PatientListModule { }
