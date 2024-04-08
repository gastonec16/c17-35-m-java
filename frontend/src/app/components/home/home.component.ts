import { Component, inject } from '@angular/core'
import { Router, RouterModule } from '@angular/router'
import { FooterComponent } from '../footer/footer.component'

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [FooterComponent, RouterModule],
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
}
