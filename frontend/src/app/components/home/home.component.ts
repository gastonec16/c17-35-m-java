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
}
