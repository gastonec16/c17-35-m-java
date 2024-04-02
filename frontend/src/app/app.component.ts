import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  //TEST DE INTEGRACIóN SPRING ANGULAR
  title = 'frontend';
  constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.get<any>('/api/test').subscribe(response => {
            this.title = response;
        });
    }
}



