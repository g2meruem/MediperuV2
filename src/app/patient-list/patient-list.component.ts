import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent {
  patients: any[] = [];

  addPatient(patientData: any) {
    this.patients.push(patientData);
  }
}
