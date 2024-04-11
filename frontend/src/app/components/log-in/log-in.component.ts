import { Component, inject } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Router, RouterModule } from '@angular/router'
import Swal from 'sweetalert2'
import { LogInCredentials } from '../../interfaces/user'
import { UserService } from '../../services/user.service'

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
                        console.log('Inicio de sesión exitoso')
                        this.router.navigate(['dashboard'])
                        form.reset()
                    } else
                        Swal.fire({
                            title: 'Error',
                            text: data.message,
                            icon: 'error'
                        })
                },
                error: (err) => {
                    Swal.fire({
                        title: 'Error',
                        text: err.error.message,
                        icon: 'error'
                    })
                }
            })
        }
        //  else if (!/[^ ]@[^ ]/.test(email)) {
        //     Swal.fire({
        //         title: 'Error',
        //         text: 'El email no es válido',
        //         icon: 'error'
        //     })
        // }
        else {
            Swal.fire({
                title: 'Error',
                text: 'Ingresa los datos faltantes',
                icon: 'error'
            })
        }
    }
}
