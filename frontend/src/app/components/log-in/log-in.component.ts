import { Component, inject } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Router, RouterModule } from '@angular/router'
import Swal from 'sweetalert2'
import { LogInCredentials } from '../../interfaces/user'
import { UserService } from '../../services/user.service'
import { AppComponent } from '../../app.component'

@Component({
    selector: 'app-log-in',
    standalone: true,
    imports: [FormsModule, RouterModule],
    templateUrl: './log-in.component.html',
    styleUrl: './log-in.component.scss'
})
export class LogInComponent {
    router = inject(Router)
    userService = inject(UserService)
    appComponent = inject(AppComponent)

    continueWithFacebook() {
        window.open('https://www.facebook.com', '_blank')
    }
    continueWithGoogle() {
        window.open('https://www.google.com', '_blank')
    }
    continueWithApple() {
        window.open('https://www.apple.com', '_blank')
    }

    user = {
        email: '',
        password: ''
    }

    showPassword = false
    showHidePassword() {
        this.showPassword = !this.showPassword
    }

    logIn(event: SubmitEvent) {
        event.preventDefault()
        const form = event.target as HTMLFormElement

        const email = (form.elements.namedItem('email') as HTMLInputElement).value
        const password = (form.elements.namedItem('password') as HTMLInputElement).value

        if (form.checkValidity()) {
            const credentials: LogInCredentials = {
                email,
                password
            }

            this.userService.logIn(credentials).subscribe({
                next: (data) => {
                    if (data.email) {
                        this.userService.setUserData(data)
                        this.router.navigate(['dashboard'])
                        form.reset()
                    }
                },
                error: (err) => {
                    Swal.fire({
                        title: 'Error',
                        text: err.error.message ? err.error.message : 'No se pudo iniciar sesión',
                        icon: 'error',
                        iconColor: 'var(--red)',
                        confirmButtonText: 'Aceptar',
                        customClass: { confirmButton: 'swal-button' }
                    })
                }
            })
        } else if (!/[^ ][^ ][^ ]@[^ ]/.test(email)) {
            Swal.fire({
                title: 'Error',
                text: 'Por favor, ingresa una dirección de correo válida.',
                icon: 'error',
                iconColor: 'var(--red)',
                confirmButtonText: 'Aceptar',
                customClass: { confirmButton: 'swal-button' }
            })
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Por favor, ingresa los datos faltantes',
                icon: 'error',
                iconColor: 'var(--red)',
                confirmButtonText: 'Aceptar',
                customClass: { confirmButton: 'swal-button' }
            })
        }
    }
}
