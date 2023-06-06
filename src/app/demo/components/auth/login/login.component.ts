import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    email: string = '';
    password: string = '';

  constructor(private auth: AngularFireAuth, private router: Router) { }

  signIn() {
    this.auth.signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        // Inicio de sesión exitoso, redirigir a la página de inicio
        this.router.navigate(['/dashboard']);
      })
      .catch(error => {
        // Error en el inicio de sesión, mostrar mensaje de error
        console.log('Error de inicio de sesión:', error);
      });
  }
}
