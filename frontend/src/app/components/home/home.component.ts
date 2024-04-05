import { Component, inject } from '@angular/core'
import { Router, RouterModule } from '@angular/router'

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    router = inject(Router)

    access() {
        this.router.navigate(['/log-in'])
    }
    start() {
        this.router.navigate(['/register'])
    }
    redirectToFacebook() {
        window.open('https://www.facebook.com', '_blank')
    }
    redirectToYoutube() {
        window.open('https://www.youtube.com', '_blank')
    }
    redirectToInstagram() {
        window.open('https://www.instagram.com', '_blank')
    }
}
