import { Component } from '@angular/core';

@Component({
  selector: 'app-formlayoutdemo',
  templateUrl: './formlayoutdemo.component.html',
  styleUrls: ['./formlayoutdemo.component.scss']
})
export class FormLayoutDemoComponent {
  patients: any[] = [];
  patient: any = {};

  addPatient() {
    this.patients.push(this.patient);
    this.patient = {};
  }
}
