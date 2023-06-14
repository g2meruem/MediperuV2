import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formlayoutdemo',
  templateUrl: './formlayoutdemo.component.html',
  styleUrls: ['./formlayoutdemo.component.scss']
})
export class FormLayoutDemoComponent {
  @Output() patientAdded: EventEmitter<any> = new EventEmitter<any>();

  patient: any = {};

  addPatient() {
    this.patientAdded.emit(this.patient);
    console.log(this.patient);
  }
}
