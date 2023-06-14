import { Component } from '@angular/core';

@Component({
  selector: 'app-tabledemo',
  templateUrl: './tabledemo.component.html',
  styleUrls: ['./tabledemo.component.scss']
})
export class TableDemoComponent {
  patients: any[] = [];

  constructor() {
    // Rellena la lista de pacientes con datos de pacientes argentinos
    this.patients = [
      { id: 1, firstName: 'Carlos', lastName: 'Gómez', age: 35, gender: 'Masculino', height: 175, weight: 70, city: 'Buenos Aires', disease: 'Hipertensión', lastVisit: '2023-06-01' },
      { id: 2, firstName: 'María', lastName: 'Rodríguez', age: 28, gender: 'Femenino', height: 165, weight: 60, city: 'Córdoba', disease: 'Gripe', lastVisit: '2023-05-28' },
      { id: 3, firstName: 'Luis', lastName: 'Fernández', age: 45, gender: 'Masculino', height: 180, weight: 80, city: 'Rosario', disease: 'Diabetes', lastVisit: '2023-05-30' },
      { id: 4, firstName: 'Ana', lastName: 'González', age: 32, gender: 'Femenino', height: 160, weight: 55, city: 'Mendoza', disease: 'Asma', lastVisit: '2023-06-02' },
      { id: 5, firstName: 'Juan', lastName: 'Pérez', age: 40, gender: 'Masculino', height: 175, weight: 85, city: 'La Plata', disease: 'Artritis', lastVisit: '2023-05-29' },
      { id: 6, firstName: 'Laura', lastName: 'López', age: 30, gender: 'Femenino', height: 170, weight: 65, city: 'Tucumán', disease: 'Migraña', lastVisit: '2023-05-31' },
      { id: 7, firstName: 'Diego', lastName: 'Silva', age: 48, gender: 'Masculino', height: 178, weight: 82, city: 'Mar del Plata', disease: 'Artritis', lastVisit: '2023-06-03' },
      { id: 8, firstName: 'Sofía', lastName: 'Martínez', age: 36, gender: 'Femenino', height: 162, weight: 58, city: 'Salta', disease: 'Alergias', lastVisit: '2023-06-04' },
      { id: 9, firstName: 'Pablo', lastName: 'López', age: 42, gender: 'Masculino', height: 180, weight: 85, city: 'San Miguel de Tucumán', disease: 'Depresión', lastVisit: '2023-06-02' },
      { id: 10, firstName: 'Camila', lastName: 'Fernández', age: 31, gender: 'Femenino', height: 168, weight: 62, city: 'Bahía Blanca', disease: 'Insomnio', lastVisit: '2023-05-30' }
    ];
  }
}
