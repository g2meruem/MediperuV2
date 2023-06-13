import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PatientService {
  patientAdded: EventEmitter<any> = new EventEmitter<any>();
}
