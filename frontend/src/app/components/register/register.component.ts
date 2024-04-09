import { Component, OnInit, inject } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Router, RouterModule } from '@angular/router'
import Swal from 'sweetalert2'
import { RegisterUser } from '../../interfaces/user'
import { UserService } from '../../services/user.service'

@Component({
    
    selector: 'app-register',
    standalone: true,
    imports: [FormsModule, RouterModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss'
})


//TODO PARA CONFIGURAR ENDPOINT Y SOLUCIONAR CORS


export class RegisterComponent implements OnInit{
    ngOnInit(): void {
       
    }
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
        confirmPassword: ''
    }

    
    registerUser(event: SubmitEvent) {
        console.log("test")
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
                text: 'Las contraseñas no coinciden',
                icon: 'error'
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
                    if (data.email) {
                        Swal.fire({
                            title: 'Éxito',
                            text: 'Ya puedes iniciar sesión',
                            icon: 'success'
                        })
                        this.router.navigate(['/log-in'])
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
        } else if (!/[^ ]@[^ ]/.test(email)) {
            Swal.fire({
                title: 'Error',
                text: 'El email no es válido',
                icon: 'error'
            })
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Ingresa los datos faltantes',
                icon: 'error'
            })
        }
    }
    
}
