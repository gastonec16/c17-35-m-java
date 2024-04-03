<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
=======
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
>>>>>>> main

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
<<<<<<< HEAD
export class AppComponent implements OnInit {
  title = 'frontend';
  messageFromBackend :string
  constructor(private http: HttpClient) {
    this.messageFromBackend = ''
   }

  ngOnInit() {
      this.http.get<any>('http://localhost:8080/api/test').subscribe( (response : any )=> {
          this.messageFromBackend = response;
      });
  }

=======
export class AppComponent {
    title = 'frontend'
>>>>>>> main
}
