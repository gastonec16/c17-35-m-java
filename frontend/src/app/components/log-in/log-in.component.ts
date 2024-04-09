import { Component, inject } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Router, RouterModule } from '@angular/router'

@Component({
    selector: 'app-log-in',
    standalone: true,
    imports: [FormsModule, RouterModule],
    templateUrl: './log-in.component.html',
    styleUrl: './log-in.component.scss'
})
export class LogInComponent {
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

    logIn(event: SubmitEvent) {
        this.router.navigate(['/dashboard'])
    }
}
