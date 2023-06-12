import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) { }

  signIn() {
    const email = 'doctorperez@gmail.com';
    const password = 'awadeuwu123';

    if (this.email === email && this.password === password) {
      // Credenciales válidas, redirigir al dashboard
      this.router.navigate(['/dashboard']);
    } else {
      // Credenciales inválidas, mostrar mensaje de error
      this.errorMessage = 'Credenciales inválidas';
    }
  }
}
