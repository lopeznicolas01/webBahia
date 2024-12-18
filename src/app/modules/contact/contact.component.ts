import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contact = { name: '', email: '', message: '' };
  contactEmail = 'bahiaestelar@gmail.com';

  constructor(private snackBar: MatSnackBar) {}

  submitForm() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      // Simulación de envío de correo
      console.log('Formulario enviado:', this.contact);

      // Mostrar notificación de éxito
      this.snackBar.open('Mensaje enviado', 'x', {
        duration: 5000,
        panelClass: ['success-snackbar'],
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
      });

      // Resetear el formulario
      this.contact = { name: '', email: '', message: '' };
    } else {
      // Mostrar notificación de error
      this.snackBar.open('Por favor, complete todos los campos', 'x', {
        duration: 5000,
        panelClass: ['error-snackbar'],
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
      });
    }
  }
}
