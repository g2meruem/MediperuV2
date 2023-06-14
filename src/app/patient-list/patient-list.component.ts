import { Component } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent {
  patients: any[] = [];

  constructor(private patientService: PatientService) {} // Inyecta el servicio

  addPatient() {
    console.log(this.patients);
    const patientData = {};
    this.patients.push(patientData);
    this.patientService.patientAdded.emit(patientData); // Emite el evento a través del servicio
  }
}
