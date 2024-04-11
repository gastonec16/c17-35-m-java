import { Component, inject } from '@angular/core';

import { Router, RouterModule } from '@angular/router'

import { FooterComponent } from '../footer/footer.component'

@Component({
  selector: 'app-deposit',
  standalone: true,
  imports: [FooterComponent, RouterModule],
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.scss'
})
export class DepositComponent {
  
  router = inject(Router)
  logOut() {
    this.router.navigate(['/'])
}

}
