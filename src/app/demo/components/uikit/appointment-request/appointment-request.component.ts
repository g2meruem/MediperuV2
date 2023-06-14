import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment-request',
  templateUrl: './appointment-request.component.html',
  styleUrls: ['./appointment-request.component.scss']
})
export class AppointmentRequestComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  date: string = '';
  comments: string = '';

  submitForm() {
    // Aquí puedes agregar la lógica para enviar la solicitud de cita médica
    // Puedes enviar los datos al backend, mostrar una confirmación, etc.
    console.log('Formulario enviado');
  }
}
