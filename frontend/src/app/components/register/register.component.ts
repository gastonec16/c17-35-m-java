import { Component, OnInit, inject, signal } from '@angular/core'
import { FormsModule, Validators } from '@angular/forms'
import { Router, RouterModule } from '@angular/router'
import Swal from 'sweetalert2'
import { RegisterUser } from '../../interfaces/user'
import { UserService } from '../../services/user.service'
import { TermsAndConditions } from './terms-and-conditions.component'

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [FormsModule, RouterModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss'
})

//TODO PARA CONFIGURAR ENDPOINT Y SOLUCIONAR CORS
export class RegisterComponent implements OnInit {
    ngOnInit(): void {}
    userService = inject(UserService)
    router = inject(Router)

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
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        terms: false
    }

    showPassword = false
    showHidePassword() {
        this.showPassword = !this.showPassword
    }

    showConfirmPassword = false
    showHideConfirmPassword() {
        this.showConfirmPassword = !this.showConfirmPassword
    }

    registerUser(event: SubmitEvent) {
        event.preventDefault()
        const form = event.target as HTMLFormElement

        const name = (form.elements.namedItem('name') as HTMLInputElement).value
        const lastName = (form.elements.namedItem('last-name') as HTMLInputElement).value
        const email = (form.elements.namedItem('email') as HTMLInputElement).value
        const password = (form.elements.namedItem('password') as HTMLInputElement).value
        const confirmPassword = (form.elements.namedItem('confirm-password') as HTMLInputElement).value

        if (password != confirmPassword) {
            Swal.fire({
                title: 'Error',
                text: 'Las contraseñas no coinciden. Por favor, inténtalo de nuevo.',
                icon: 'error',
                iconColor: 'var(--red)',
                confirmButtonText: 'Aceptar',
                customClass: { confirmButton: 'swal-button' }
            })
        } else if (form.checkValidity()) {
            const newUser: RegisterUser = {
                name,
                lastName,
                email,
                password
            }

            this.userService.registerUser(newUser).subscribe({
                next: (data) => {
                    if (!data) {
                        Swal.fire({
                            title: 'Éxito',
                            text: 'Ya puedes iniciar sesión',
                            icon: 'success',
                            iconColor: 'var(--green-3)',
                            confirmButtonText: 'Aceptar',
                            customClass: { confirmButton: 'swal-button' }
                        })
                        this.router.navigate(['/log-in'])
                        form.reset()
                    }
                },
                error: (err) => {
                    Swal.fire({
                        title: 'Error',
                        text: err.error ? err.error.message : 'No se pudo registrar',
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

    showTermsAndConditions() {
        Swal.fire({
            html: TermsAndConditions.termsAndConditions,
            confirmButtonText: 'Aceptar',
            customClass: { confirmButton: 'swal-button' }
        })
    }
}
