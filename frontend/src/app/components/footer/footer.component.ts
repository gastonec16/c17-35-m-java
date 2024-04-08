import { Component } from '@angular/core'

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
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
