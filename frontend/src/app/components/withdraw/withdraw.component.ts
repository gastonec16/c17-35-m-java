import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router'

import { FooterComponent } from '../footer/footer.component'

@Component({
  selector: 'app-withdraw',
  standalone: true,
  imports: [FooterComponent, RouterModule],
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.scss'
})
export class WithdrawComponent {
  router = inject(Router)
  logOut() {
    this.router.navigate(['/'])
}
}
