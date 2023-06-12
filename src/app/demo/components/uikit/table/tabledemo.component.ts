import { Component } from '@angular/core';

@Component({
  selector: 'app-tabledemo',
  templateUrl: './tabledemo.component.html',
  styleUrls: ['./tabledemo.component.scss']
})
export class TableDemoComponent {
  patients: any[] = [
    { id: 1, name: 'María Pérez', age: 45, gender: 'Femenino', height: 162, weight: 70, disease: 'Diabetes tipo 2', lastVisit: '12/04/2023' },
    { id: 2, name: 'Juan González', age: 36, gender: 'Masculino', height: 175, weight: 85, disease: 'Hipertensión', lastVisit: '05/02/2023' },
    { id: 3, name: 'Sofía Rodríguez', age: 24, gender: 'Femenino', height: 168, weight: 62, disease: 'Asma', lastVisit: '18/01/2023' },
    // Agrega más pacientes aquí
  ];
}
