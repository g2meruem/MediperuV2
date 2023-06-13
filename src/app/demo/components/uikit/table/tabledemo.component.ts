import { Component } from '@angular/core';
import { PatientService } from 'src/app/patient.service';

@Component({
  selector: 'app-tabledemo',
  templateUrl: './tabledemo.component.html',
  styleUrls: ['./tabledemo.component.scss']
})
export class TableDemoComponent {
  patients: any[] = [];

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.patientService.patientAdded.subscribe((patient: any) => {
      this.addPatient(patient);
    });
  }

  addPatient(patient: any) {
    this.patients.push(patient);
    console.log(this.patients);
  }
}
